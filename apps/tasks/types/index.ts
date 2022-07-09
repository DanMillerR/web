export type Task = {
    title: string
    subTitle: string
    text: string
    progress: number
    done: boolean
    skipped: boolean
    time: {
        create: string
        start: string
        end: string
    }
    img: string
    id: string
    period: {
        schema: string
        mod:
            | 'EVERY_X_DAYS'
            | 'EVERY_X_DAYS_AFTER_Y'
            | 'ON_CERTAIN_DATES'
            | 'EVERY_X_IN_EVERY_MONTH'
            | 'EVERY_X_IN_EVERY_MONTH'
    }
    markers: {
        importantness: number
        urgency: number
        address: string
    }
    subTasks: Task[]
}
