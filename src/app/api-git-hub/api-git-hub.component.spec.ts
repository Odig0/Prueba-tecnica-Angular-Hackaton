import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGitHubComponent } from './api-git-hub.component';

describe('ApiGitHubComponent', () => {
  let component: ApiGitHubComponent;
  let fixture: ComponentFixture<ApiGitHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGitHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
