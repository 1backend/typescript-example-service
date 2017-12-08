import * as express from 'express';

export function Hi(req: express.Request, rsp: express.Response) {
  rsp.send(
    JSON.stringify('Hi, this is coming from the example typescript service.')
  );
}

// This Rectangle type is not the same as what is used in the "types" section of this service on 1backend.com
// The other ones is used to generate clients, this one is for the server.
// They are intentionally kepts separate for now.
interface Rectangle {
  sideA: number;
  sideB: number;
}

export function CalculateRectangleArea(
  req: express.Request,
  rsp: express.Response
) {
  const rect: Rectangle = req.body.rect;
  let unit: string = req.body.Unit;
  const area = rect.sideA * rect.sideA;
  if (!unit) {
    unit = 'cm2';
  }

  rsp.send(JSON.stringify(area + unit));
}
