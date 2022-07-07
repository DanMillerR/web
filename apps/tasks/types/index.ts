export type Task = {
    title: string
    subTitle: string
    text: string
    progress: number
    done: boolean
    skipped: boolean
    time: string
    markers: {
        importantness: number
        urgency: number
        address: string
    }
    subTasks: Task[]
}
