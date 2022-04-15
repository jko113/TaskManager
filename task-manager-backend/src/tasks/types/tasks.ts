export interface Task {
    timestamp: string | null,
    completionStatus: string,
    name: string,
    description: string,
    hexId: string,
    pendingDeletion: boolean
}