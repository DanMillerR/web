export type Task = {
    id: string

    // text
    title: string
    subTitle: string
    text: string

    // state
    progress: number
    done: boolean
    skipped: boolean

    // time
    timestamps: {
        create: string
        start: string
        update: string
        deadline: string // theoretically ends
        end: string // actually ends
    }
    img: string
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
        person: string
    }

    subTasks: Task[]
}
