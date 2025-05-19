export async function requestNumber(service: string, country: string) {
  return {
    number: '+1234567890',
    sessionId: 'abc123'
  };
}

export async function getOTP(sessionId: string) {
  return {
    code: '123456',
    status: 'received'
  };
}
