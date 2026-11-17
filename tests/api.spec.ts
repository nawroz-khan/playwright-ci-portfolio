import { test, expect } from '@playwright/test';

test.describe('API Contract & Health Validation', () => {
  test('validates GET user payload schema and status', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      id: 1,
      name: expect.any(String),
      email: expect.stringContaining('@'),
    });
  });

  test('validates POST resource creation response', async ({ request }) => {
    const payload = {
      title: 'Playwright CI Verification',
      body: 'Automated API test executed in CI pipeline',
      userId: 1,
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: payload,
    });

    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created).toMatchObject(payload);
    expect(created.id).toBeDefined();
  });
});
