import { environment } from './../../environments/environment';
import { Repository } from './../interfaces/repository';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  repositories$: BehaviorSubject<Repository[]>;

  constructor(private httpClient: HttpClient) {
    this.repositories$ = new BehaviorSubject<Repository[]>([]);
  }

  fetchRepositories(username: string): void {
    this.httpClient.get<any[]>(environment.apiPath + '/users/' + username + '/repos').subscribe(repo => {
      if (repo && repo.length > 0) {
        this.repositories$.next(this.translateRepoResult(repo));
      }
    });
  }

  translateRepoResult(obj: any[]): Repository[] {
    const repoList: Repository[] = [];

    obj.forEach(x => {
      repoList.push({
        defaultBranch: x.default_branch,
        description: x.description,
        name: x.name,
        urlGit: x.html_url,
        language: x.language
      });
    });

    return repoList;
  }
}
