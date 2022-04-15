import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @Column({
        name: 'hex_id',
        unique: true
    })
    hexId: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        name: 'pending_deletion'
    })
    pendingDeletion: boolean;

    @Column({
        nullable: true
    })
    timestamp: string;

    @Column({
        name: 'completion_status'
    })
    completionStatus: string;
}

