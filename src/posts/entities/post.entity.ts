import { Column, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Post extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    description: string | null;

    @Column
    image: string | null;

}
