import { RemoteAuthentication } from "./remote-autentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";

type SutTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Shoud call HttpPostClient with corret URL', async () => {
    const url = 'other_url';
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
