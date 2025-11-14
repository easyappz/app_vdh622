import api from './axios'

export function sendFeedback(payload) {
  return api.post('/api/feedback/', payload).then(r => r.data)
}
