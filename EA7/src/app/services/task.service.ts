import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Task {
  id?: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskCollection = collection(this.firestore, 'tasks');

  constructor(private firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    return collectionData(this.taskCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  async addTask(title: string, description: string) {
    await addDoc(this.taskCollection, { title, description });
  }

  async deleteTask(taskId: string) {
    const taskDoc = doc(this.firestore, `tasks/${taskId}`);
    await deleteDoc(taskDoc);
  }
}
