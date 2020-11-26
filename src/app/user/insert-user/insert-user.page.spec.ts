import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertUserPage } from './insert-user.page';

describe('InsertUserPage', () => {
  let component: InsertUserPage;
  let fixture: ComponentFixture<InsertUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
