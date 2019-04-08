defmodule ElixirConsumer.MixProject do
  use Mix.Project

  def project do
    [
      app: :elixir_consumer,
      version: "0.1.0",
      elixir: "~> 1.8",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:amqp, "~> 1.0"},
      {:ranch_proxy_protocol, github: "heroku/ranch_proxy_protocol", override: true}
    ]
  end
end
