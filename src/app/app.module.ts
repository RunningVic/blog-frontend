import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { MarkdownModule } from 'ngx-markdown';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { FormsModule } from '@angular/forms';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BlogCardComponent,
    FooterComponent,
    AdminComponent,
    NewBlogComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule,
    LMarkdownEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
