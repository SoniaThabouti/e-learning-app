import { Teacher } from "./teacher";
export class Course {
    idCourse !: number;
    title !: string;
    year !: number;
    teacher !: Teacher;
}
