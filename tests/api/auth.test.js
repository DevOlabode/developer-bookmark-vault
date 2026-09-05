/** 
 * Auth routes tests - status, stubs, protected endpoints, logout
 */

const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../../app');