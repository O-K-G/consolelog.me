import cv from '@root/public/cv.json';

export async function GET() {
  return Response.json(cv);
}
