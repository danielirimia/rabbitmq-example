FROM elixir:1.8

WORKDIR /app
ADD . /app

# Install hex & rebar
RUN mix local.hex --force && \
    mix local.rebar --force && \
    mix hex.info

RUN mix deps.get

EXPOSE 4000
