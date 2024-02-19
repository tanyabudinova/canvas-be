import { Column, Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
    tableName: 'Post',
  })
export class Post extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    description: string;

    @Column
    image: string;

}
