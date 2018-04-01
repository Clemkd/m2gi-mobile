import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { LoggerProvider } from '../../providers/logger/logger';
import { TodoProvider } from '../../providers/todo/todo';
import { TodoItem } from '../../model/todo-item.model';

@Component({
  selector: 'page-todo-view',
  templateUrl: 'todo-view.html',
})
export class TodoViewPage {

	public item: any;

	constructor(private translate: TranslateService, private logger: LoggerProvider, private totoProvider: TodoProvider, public navCtrl: NavController, public navParams: NavParams, private alert: AlertController) {
		var todo = this.navParams.get('todo');
		this.item = { name: todo.name || "???", desc: todo.desc || "" };
	}

	ionViewDidLoad() {
		// nothing
	}

	returnPrecPage(): void {
		this.navCtrl.pop();
	}
}