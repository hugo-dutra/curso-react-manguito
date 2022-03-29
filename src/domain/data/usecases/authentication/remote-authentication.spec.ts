import { RemoteAuthentication } from "./remote-autentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";

describe('RemoteAuthentication', () => {
  test('Shoud call HttpPostClient with corret URL', async () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
