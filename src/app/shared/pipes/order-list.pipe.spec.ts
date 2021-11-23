import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('input and output of values', ()=>{
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default;
    const result: TrackModel[] = pipe.transform(data);
    expect(result).toEqual(data);
  });

  it('order correctly ASC',()=>{
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default;
    const firstValue = data.find((i: any) => i._id === 7);
    const lastValue = data.find((i:any) => i._id === 6);
    const result: TrackModel[] = pipe.transform(data,'name','asc');
    const firstResult = result[0];
    const lastResult = result[result.length-1];
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });

  it('order correctly DESC',()=>{
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default;
    const firstValue = data.find((i: any) => i._id === 7);
    const lastValue = data.find((i:any) => i._id === 6);
    const result: TrackModel[] = pipe.transform(data,'name','desc');
    const firstResult = result[0];
    const lastResult = result[result.length-1];
    expect(firstResult).toEqual(lastValue);
    expect(lastResult).toEqual(firstValue);
  });
});
