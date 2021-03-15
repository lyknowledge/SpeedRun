import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachPage } from './coach.page';

describe('CoachPage', () => {
  let component: CoachPage;
  let fixture: ComponentFixture<CoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoachPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
