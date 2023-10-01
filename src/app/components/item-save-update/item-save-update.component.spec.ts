import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSaveUpdateComponent } from './item-save-update.component';

describe('ItemSaveUpdateComponent', () => {
  let component: ItemSaveUpdateComponent;
  let fixture: ComponentFixture<ItemSaveUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemSaveUpdateComponent]
    });
    fixture = TestBed.createComponent(ItemSaveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
