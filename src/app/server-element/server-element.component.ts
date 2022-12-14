import { Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  OnDestroy,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
 @Input('srvElement') element: {type: string, name: string, content: string};
 @Input() name: string;
 @ViewChild('heading', {static: true}) header: ElementRef;
 @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngchanges called');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngoninit called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngDoCheck() {
    console.log('docheck called')
  }

  ngAfterContentInit(): void {
      console.log('ngaftercontentinit called');
      console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);



  }

  ngAfterContentChecked(): void {
      console.log('aftercontentchecked called')
  }

  ngAfterViewInit(): void {
    console.log('ng after view init called')
    console.log('text content:' + this.header.nativeElement.textContent);
}

ngAfterViewChecked(): void {
    console.log('afterviewchecked called')
}

ngOnDestroy(): void {
    console.log('ngOnDestroy')
}

}
