export interface Data {
    presentation: string[],
    questions_and_answers: string[],
    participants: Participants
}

export interface Participants{
    executives: StdExcAna[],
    analyst: StdExcAna[]

}


export interface StdExcAna {
    id: string,
    name: string,
    company: string,
    designation: string,
    transcript_data: string[]
}

