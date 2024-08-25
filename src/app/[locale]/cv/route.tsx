import cv from '../../../../public/cv.json';

export async function GET() {
  return Response.json(cv);
}
