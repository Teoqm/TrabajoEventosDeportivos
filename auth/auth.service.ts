import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioservice: UsuariosService,
        private jwtService: JwtService,
    ) {}

    async login(correo: string, password: string) {
        // Buscar usuario por correo
        const usuario = await this.usuarioservice.findByCorreo(correo);
        if (!usuario) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        // Validar contraseña
        const passwordValida = await this.usuarioservice.validarPassword(password, usuario.password);
        if (!passwordValida) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        // Generar payload del token
        const payload = {
            sub: usuario.id,
            email: usuario.correo,
            rol: usuario.rol,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol,
            },
        };
    }
}