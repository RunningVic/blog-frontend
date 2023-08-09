import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'create', component: NewBlogComponent },
  { path: 'blog', component: BlogDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
