import { test } from 'node:test';
import assert from 'node:assert/strict';

test('ci-only failure (retest 2.3)', () => {
  if (process.env.CI) assert.fail('重測 2.3：故意讓 CI 失敗');
});
