import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.css']
})
export class FeedingComponent implements OnInit {

  timer = [];

  add() {
    this.timer.push({value: 'gsre'});
  }

  constructor() { }

  ngOnInit() {
  }

  // addTime(event:Event)
  //   {
  //       event.preventDefault();

  //       let controlForm = $('.controls form:first'),
  //       currentEntry = $(this).parents('.entry:first'),
  //       newEntry = $(currentEntry.clone()).appendTo(controlForm);

  //       newEntry.find('input').val('');
  //       controlForm.find('.entry:not(:last) .btn-add')
  //           .removeClass('btn-add').addClass('btn-remove')
  //           .removeClass('btn-success').addClass('btn-danger')
  //           .html('<span class="glyphicon glyphicon-minus"></span>');
  //   }




}

