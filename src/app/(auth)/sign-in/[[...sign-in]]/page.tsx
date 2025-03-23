'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import { Loader } from 'lucide-react';

import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const SignInPage = () => {
  return (
    <div className='grid w-full grow items-center px-4 sm:justify-center'>
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name='start'>
                <Card className='w-full sm:w-96'>
                  <Logo className='mx-auto' />
                  <CardHeader>
                    <CardTitle>Entrar em CompanyFy</CardTitle>
                    <CardDescription>
                      Bem vindo de volta! Insira seus dados para entrar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-y-4'>
                    <div className='grid grid-cols-2 gap-x-4'>
                      <Clerk.Connection name='github' asChild>
                        <Button
                          size='sm'
                          variant='outline'
                          type='button'
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope='provider:github'>
                            {(isLoading) =>
                              isLoading ? (
                                <Loader className='size-4 animate-spin' />
                              ) : (
                                <>
                                  <Clerk.Icon className='size-4' />
                                  GitHub
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                      <Clerk.Connection name='google' asChild>
                        <Button
                          size='sm'
                          variant='outline'
                          type='button'
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope='provider:google'>
                            {(isLoading) =>
                              isLoading ? (
                                <Loader className='size-4 animate-spin' />
                              ) : (
                                <>
                                  <Clerk.Icon className='size-4' />
                                  Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </div>

                    <div className='relative'>
                      <Separator />
                      <p className='bg-background text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-center text-sm'>
                        ou
                      </p>
                    </div>

                    <Clerk.Field name='identifier' className='space-y-2'>
                      <Clerk.Label asChild>
                        <Label>Email</Label>
                      </Clerk.Label>
                      <Clerk.Input type='email' required asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className='text-destructive block text-sm' />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className='grid w-full gap-y-4'>
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Loader className='size-4 animate-spin' />
                              ) : (
                                'Continue'
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>

                      <Button variant='link' size='sm' asChild>
                        <Clerk.Link navigate='sign-up'>
                          Não tem conta? Inscreva-se
                        </Clerk.Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>

              <SignIn.Step name='choose-strategy'>
                <Card className='w-full sm:w-96'>
                  <Logo className='mx-auto' />
                  <CardHeader>
                    <CardTitle>Use outro método</CardTitle>
                    <CardDescription>
                      Teve algum problema? Use algum desses métodos para
                      entrar.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-y-4'>
                    <SignIn.SupportedStrategy name='email_code' asChild>
                      <Button
                        type='button'
                        variant='link'
                        disabled={isGlobalLoading}
                      >
                        Código de e-mail
                      </Button>
                    </SignIn.SupportedStrategy>
                    <SignIn.SupportedStrategy name='password' asChild>
                      <Button
                        type='button'
                        variant='link'
                        disabled={isGlobalLoading}
                      >
                        Senha
                      </Button>
                    </SignIn.SupportedStrategy>
                  </CardContent>
                  <CardFooter>
                    <div className='grid w-full gap-y-4'>
                      <SignIn.Action navigate='previous' asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => {
                              return isLoading ? (
                                <Loader className='size-4 animate-spin' />
                              ) : (
                                'Voltar'
                              );
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>

              <SignIn.Step name='verifications'>
                <SignIn.Strategy name='password'>
                  <Card className='w-full sm:w-96'>
                    <Logo className='mx-auto' />
                    <CardHeader>
                      <CardTitle>Verifique seu email</CardTitle>
                      <CardDescription>
                        Insiro o código de verificação no campo abaixo
                      </CardDescription>
                      <p className='text-muted-foreground text-sm'>
                        Bem vindo de volta <SignIn.SafeIdentifier />
                      </p>
                    </CardHeader>
                    <CardContent className='grid gap-y-4'>
                      <Clerk.Field name='password' className='space-y-2'>
                        <Clerk.Label asChild>
                          <Label>Senha</Label>
                        </Clerk.Label>
                        <Clerk.Input type='password' asChild>
                          <Input />
                        </Clerk.Input>
                        <Clerk.FieldError className='text-destructive block text-sm' />
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className='grid w-full gap-y-4'>
                        <SignIn.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <Loader className='size-4 animate-spin' />
                                ) : (
                                  'Continue'
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                        <SignIn.Action navigate='choose-strategy' asChild>
                          <Button type='button' size='sm' variant='link'>
                            Use outro método
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Strategy>

                <SignIn.Strategy name='email_code'>
                  <Card className='w-full sm:w-96'>
                    <Logo className='mx-auto' />
                    <CardHeader>
                      <CardTitle>Verifique seu email</CardTitle>
                      <CardDescription>
                        Insiro o código de verificação no campo abaixo
                      </CardDescription>
                      <p className='text-muted-foreground text-sm'>
                        Bem vindo de volta <SignIn.SafeIdentifier />
                      </p>
                    </CardHeader>
                    <CardContent className='grid gap-y-4'>
                      <Clerk.Field name='code'>
                        <Clerk.Label className='sr-only'>
                          Código de verificação
                        </Clerk.Label>
                        <div className='grid items-center justify-center gap-y-2'>
                          <div className='flex justify-center text-center'>
                            <Clerk.Input
                              type='otp'
                              autoSubmit
                              className='flex justify-center has-[:disabled]:opacity-50'
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className='border-input data-[status=selected]:ring-ring data-[status=cursor]:ring-ring relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1'
                                  >
                                    {value}
                                  </div>
                                );
                              }}
                            />
                          </div>
                          <Clerk.FieldError className='text-destructive block text-center text-sm' />
                          <SignIn.Action
                            asChild
                            resend
                            className='text-muted-foreground'
                            fallback={({ resendableAfter }) => (
                              <Button variant='link' size='sm' disabled>
                                Não recebeu o código? Reenviar (
                                <span className='tabular-nums'>
                                  {resendableAfter}
                                </span>
                                )
                              </Button>
                            )}
                          >
                            <Button variant='link' size='sm'>
                              Não recebeu o código? Reenviar
                            </Button>
                          </SignIn.Action>
                        </div>
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className='grid w-full gap-y-4'>
                        <SignIn.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {(isLoading) => {
                                return isLoading ? (
                                  <Loader className='size-4 animate-spin' />
                                ) : (
                                  'Continue'
                                );
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                        <SignIn.Action navigate='choose-strategy' asChild>
                          <Button size='sm' variant='link'>
                            Use outro método
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignIn.Strategy>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
};

export default SignInPage;
