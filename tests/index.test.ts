import {default as request} from 'supertest';
import { app } from '../src/index';
import { describe, test, expect } from "@jest/globals"

describe('GET /', () => {
  test('should return Hello world', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello world\n');
  });

});