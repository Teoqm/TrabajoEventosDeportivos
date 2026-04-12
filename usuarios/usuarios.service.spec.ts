import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario, RolUsuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: any) {
    // Verificar si el correo ya existe
    const existe = await this.usuarioRepository.findOne({
      where: { correo: createUsuarioDto.correo },
    });
    if (existe) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Encriptar contraseña antes de guardar
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, saltRounds);

    const nuevoUsuario = this.usuarioRepository.create({
      ...createUsuarioDto,
      password: hashedPassword,
      rol: RolUsuario.CLIENTE, // Por defecto cliente
    });

    return await this.usuarioRepository.save(nuevoUsuario);
  }

  async findByCorreo(correo: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({ where: { correo } });
  }

  async findOne(id: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({ where: { id } });
  }

  // Método para validar contraseña (lo usará el auth service)
  async validarPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}