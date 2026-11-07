import { test } from 'node:test';
import assert from 'node:assert/strict';

test('gate always fails', () => {
  assert.fail("runbook 3.4：故意讓 checks 失敗（第 1 次）");
});
