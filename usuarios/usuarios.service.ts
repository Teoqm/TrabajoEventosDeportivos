import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto) {
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, 10);

    const usuario = this.usuarioRepository.create({
      ...createUsuarioDto,
      password: hashedPassword,
    });

    return this.usuarioRepository.save(usuario);
  }

  async validateUser(correo: string, password: string) {
    const usuario = await this.usuarioRepository.findOne({ where: { correo } });

    if (!usuario) return null;

    const isMatch = await bcrypt.compare(password, usuario.password);

    if (!isMatch) return null;

    return usuario;
  }
}