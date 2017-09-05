import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MynetworkComponent } from './mynetwork.component';
import { JobComponent } from './job.component';
import { MessageComponent } from './message.component';
import { NoticationComponent } from './notication.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mynetworks', component: MynetworkComponent },
    { path: 'jobs', component: JobComponent },
    { path: 'message', component: MessageComponent },
    { path: 'notication', component: NoticationComponent }
]
export const appRoutes = RouterModule.forRoot(routing);