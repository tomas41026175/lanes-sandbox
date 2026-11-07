import { test } from 'node:test';
import assert from 'node:assert/strict';

test('ci-only: fails only when CI is set', () => {
  if (process.env.CI) assert.fail('runbook 2.3：故意讓 CI 失敗');
});
