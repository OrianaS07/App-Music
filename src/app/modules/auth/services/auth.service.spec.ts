import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import * as mockRaw from '../../../data/user.json';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httClientSpy: {post: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    httClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Send Credentials, return data and token', ()=>{

    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: 'eweqwqeqwew'
    }

    httClientSpy.post.and.returnValue(
      of(mockResponse)
    );

    service.sendCredentials(user.email, user.password)
      .subscribe(
        response =>{
          const getProperties = Object.keys(response);
          expect(getProperties).toContain('data');
          expect(getProperties).toContain('tokenSession');

        }
      )
  });
});
