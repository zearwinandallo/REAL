import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IMonitoringView } from '../models/monitoring.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  private dbPath = "/PowerData"
  monitorRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.monitorRef = db.list(this.dbPath);
  }

  getAllMonitoringView() {
    return this.monitorRef;
  }

  getMonitoringView(key: string) {
    return this.db.object(`${this.dbPath}/${key}`);
  }

  // createMonitoringView(monitoringView?: IMonitoringView) {
  //   const sampleMonitoringView: IMonitoringView = {
  //     active_power_W: 0,
  //     current_A: 0,
  //     frequency_Hz: 0,
  //     phase_angle_deg: 0,
  //     power_kW: 0,
  //     voltage_V: 0,
  //     date_time: null
  //   };

  //   this.monitorRef.push(sampleMonitoringView);
  // }

}
