defmodule ElixirConsumerTest do
  use ExUnit.Case
  doctest ElixirConsumer

  test "greets the world" do
    assert ElixirConsumer.hello() == :world
  end
end
