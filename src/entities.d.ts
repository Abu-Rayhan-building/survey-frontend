interface User {
    name: string;
    roles: Role[];
}

interface Role {
    name: string;
}

interface Course{
    Semester;
    instructors: User[];
    students: User[];
    teachingAssistance: User[];
}

interface Semester {
    name: String;
}

interface Survey {
    course: Course;
    name: String;
    begging: Date;
    endTime: Date;
    questions: Question[];
}

interface SurveyResponse {
    survey: Survey;
    replies: Reply[];
    submitTime: Date;
}

type Question = RangedOptionQuestion|MultiChoiceQuestion|TextQuestion;

private interface BaseQuestion {
    text: string;
    course: Course;
}

interface RangedOptionQuestion extends BaseQuestion {
    min: number;
    max: number;
}

interface MultiChoiceQuestion extends BaseQuestion{
    options: string[];
    forcedNumber: number;
    availableNumber: number;
}

interface TextQuestion  extends BaseQuestion{
    maxLength: number;
}

type Reply = RangedOptionReply|MultiChoiceReply|TextReply;

private interface BaseReply{
    question: Question;
    responder: User;
}

interface MultiChoiceReply extends BaseReply{
    optionIndex: number[];
}

interface TextReply extends BaseReply{
    text: string;
}

interface RangedOptionReply extends BaseReply{
    value: number;
}