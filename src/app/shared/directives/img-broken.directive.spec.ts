import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img class="testing" appImgBroken [src]="srckMock">'
})

class TestComponent{
  public srckMock:any = null;
}

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[
        TestComponent,
        ImgBrokenDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('Must be instanced correctly',()=>{
    expect(component).toBeTruthy();
  });

  it('Change image to default',(done: DoneFn)=>{
    const beforeImgElement = fixture.debugElement.query(By.css('.testing')).nativeElement;
    const beforeImgSrc = beforeImgElement.src;

    component.srckMock = undefined;

    setTimeout(()=>{
      const afterImgElement = fixture.debugElement.query(By.css('.testing')).nativeElement;
      const afterImgSrc = beforeImgElement.src;
      expect(afterImgSrc).toMatch(/\bimage_broken\b/);
      done();
    }, 3000);
  });
});
