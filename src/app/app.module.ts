//SHIFT + ALT + F => PRETTIER **********



import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgWhiteboardModule } from 'ng-whiteboard';

//--------------------------
//This is the importation in the last project


/**import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';*/

//-----------------------------------------
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';

import { ManageTeacherComponent } from './admin-space/manage-teacher/manage-teacher.component';
import { ManageSubjectComponent } from './admin-space/manage-subject/manage-subject.component';
import { ManageCalendarComponent } from './admin-space/manage-calendar/manage-calendar.component';
import { ManageStudentComponent } from './admin-space/manage-student/manage-student.component';






import { StudentSpaceComponent } from './student-space/student-space.component';
import { LoginAdminComponent } from './login-all/login-admin/login-admin.component';
import { LoginStudentComponent } from './login-all/login-student/login-student.component';
import { FooterHComponent } from './home/footer-h/footer-h.component';
import { HeaderHComponent } from './home/header-h/header-h.component';
import { SectionsComponent } from './home/sections/sections.component';
import { SideBarComponent } from './admin-space/side-bar/side-bar.component';
import { UpdateStudentComponent } from './admin-space/manage-student/update-student/update-student.component';
import { StudentDetailsComponent } from './admin-space/manage-student/student-details/student-details.component';
import { CreateStudentComponent } from './admin-space/manage-student/create-student/create-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ManageGroupComponent } from './admin-space/manage-group/manage-group.component';
import { CreateGroupComponent } from './admin-space/manage-group/create-group/create-group.component';
import { UpdateGroupComponent } from './admin-space/manage-group/update-group/update-group.component';
import { DetailsGroupComponent } from './admin-space/manage-group/details-group/details-group.component';
import { UpdateTeacherComponent } from './admin-space/manage-teacher/update-teacher/update-teacher.component';
import { CreateTeacherComponent } from './admin-space/manage-teacher/create-teacher/create-teacher.component';
import { TeacherDetailsComponent } from './admin-space/manage-teacher/teacher-details/teacher-details.component';
import { LoginTeacherComponent } from './login-all/login-teacher/login-teacher.component';
import { CreateSubjectComponent } from './admin-space/manage-subject/create-subject/create-subject.component';
import { UpdateSubjectComponent } from './admin-space/manage-subject/update-subject/update-subject.component';
import { TimeTableFilter } from './pipe.filter'
import { SidebarteacherComponent } from './teacherspace/sidebarteacher/sidebarteacher.component';
import { AddexamComponent } from './teacherspace/exams/addexam/addexam.component';
import { ExamsComponent } from './teacherspace/exams/exams.component';
import { ClassroomComponent } from './teacherspace/classroom/classroom.component';
import { ManageAdminAccountComponent } from './admin-space/manage-admin-account/manage-admin-account.component';
import { UpdateAccountComponent } from './admin-space/manage-admin-account/update-account/update-account.component';
import { ManageEventsComponent } from './admin-space/manage-events/manage-events.component';
import { EventDetailsComponent } from './admin-space/manage-events/event-details/event-details.component';
import { UpdateEventComponent } from './admin-space/manage-events/update-event/update-event.component';
import { CreateEventComponent } from './admin-space/manage-events/create-event/create-event.component';
import { ManageNotesComponent } from './admin-space/manage-notes/manage-notes.component';
import { TeacherspaceComponent } from './teacherspace/teacherspace.component';


import {DayPilotModule} from "daypilot-pro-angular";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    AdminSpaceComponent,
    ManageTeacherComponent,
    ManageSubjectComponent,
    ManageCalendarComponent,
    ManageStudentComponent,
    StudentSpaceComponent,
    LoginAdminComponent,
    LoginStudentComponent,
    FooterHComponent,
    HeaderHComponent,
    SectionsComponent,
    SideBarComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    CreateStudentComponent,
    ManageGroupComponent,
    CreateGroupComponent,
    UpdateGroupComponent,
    DetailsGroupComponent,
    UpdateTeacherComponent,
    CreateTeacherComponent,
    TeacherDetailsComponent,
    LoginTeacherComponent,
    SidebarteacherComponent,
    AddexamComponent,
    ExamsComponent,
    


    CreateSubjectComponent,
    UpdateSubjectComponent,
    TimeTableFilter,
    ClassroomComponent,
    ManageAdminAccountComponent,
    UpdateAccountComponent,
    ManageEventsComponent,
    EventDetailsComponent,
    UpdateEventComponent,
    CreateEventComponent,
    ManageNotesComponent,
    
    TeacherspaceComponent,
  ],

  imports: [
    DayPilotModule,


    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatSnackBarModule,
    Ng2SearchPipeModule,
    MDBBootstrapModule,
    MatCardModule,

    NgWhiteboardModule,

    //OLD CODE MABY WILL BE NEEDED

   /* MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatCarouselModule,
    MDBBootstrapModule,
    ToastrModule,
    MatDialogModule,
    MatSidenavModule*/

],
  providers: [TimeTableFilter,
  //DataService
],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    HomeComponent
    ],



})
export class AppModule { }
