import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum RolUsuario {
    CLIENTE = 'cliente',
    ADMIN = 'admin',
}

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    nombre: string;

    @Column({ unique: true })
    correo: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: RolUsuario,
        default: RolUsuario.CLIENTE,
    })
    rol: RolUsuario;

    @CreateDateColumn()
    fechaRegistro: Date;

    @Column({ nullable: true })
    twoFactorSecret: string;

    @Column({ default: false })
    isTwoFactorEnabled: boolean;
}