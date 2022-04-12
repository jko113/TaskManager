export interface Task {
    timestamp: string | null,
    completionStatus: string,
    name: string,
    description: string,
    id: string,
    pendingDeletion: boolean
}