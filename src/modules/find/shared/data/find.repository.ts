import { SubjectRepository } from "../../subjects/data/subject.repository";
import { TutorRepository } from "../../tutors/data/tutor.repository";

export interface FindRepository extends TutorRepository, SubjectRepository {}
