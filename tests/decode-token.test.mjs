import { test } from 'node:test';
import assert from 'node:assert/strict';
import decodeToken from '../src/helpers/decodeToken.mjs';

test('token decoding preserves claims and Unicode names', () => {
  const payload = { id: 'test-user', role: 'admin', exp: 2000000000, firstName: 'Иван' };
  const token = `eyJhbGciOiJub25lIn0.${Buffer.from(JSON.stringify(payload)).toString('base64url')}.test`;
  assert.deepEqual(decodeToken(token), payload);
});

test('missing and malformed tokens keep the existing null contract', () => {
  for (const token of [null, undefined, '', 'malformed', 'a.not-json.c']) {
    assert.equal(decodeToken(token), null);
  }
});
