interface User {
    name: string;
    roles: Role[];
    email: string;
    submitTime: Date;
    studentId: number;
    nationalId: number;
}

interface Role {
    name: string;
}

interface University{
    name: string;
    departments: Department[];
}

interface Department{
    name: string;
}

interface Course{
    Semester;
    users: UserCourseRelation[];
    department: Department;
}

interface UserCourseRelation {
    roleInCourse: RoleInCourse;
    user: User;
    course: Course;
}

interface RoleInCourse{
    course: Course;
    name: string;
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
    targetCourseRoles: RoleInCourse[];
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