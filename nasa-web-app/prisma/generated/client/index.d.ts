
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Asteroids
 * 
 */
export type Asteroids = $Result.DefaultSelection<Prisma.$AsteroidsPayload>
/**
 * Model Comets
 * 
 */
export type Comets = $Result.DefaultSelection<Prisma.$CometsPayload>
/**
 * Model Planets
 * 
 */
export type Planets = $Result.DefaultSelection<Prisma.$PlanetsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Asteroids
 * const asteroids = await prisma.asteroids.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Asteroids
   * const asteroids = await prisma.asteroids.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.asteroids`: Exposes CRUD operations for the **Asteroids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asteroids
    * const asteroids = await prisma.asteroids.findMany()
    * ```
    */
  get asteroids(): Prisma.AsteroidsDelegate<ExtArgs>;

  /**
   * `prisma.comets`: Exposes CRUD operations for the **Comets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comets
    * const comets = await prisma.comets.findMany()
    * ```
    */
  get comets(): Prisma.CometsDelegate<ExtArgs>;

  /**
   * `prisma.planets`: Exposes CRUD operations for the **Planets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planets
    * const planets = await prisma.planets.findMany()
    * ```
    */
  get planets(): Prisma.PlanetsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Asteroids: 'Asteroids',
    Comets: 'Comets',
    Planets: 'Planets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "asteroids" | "comets" | "planets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Asteroids: {
        payload: Prisma.$AsteroidsPayload<ExtArgs>
        fields: Prisma.AsteroidsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsteroidsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsteroidsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>
          }
          findFirst: {
            args: Prisma.AsteroidsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsteroidsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>
          }
          findMany: {
            args: Prisma.AsteroidsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>[]
          }
          create: {
            args: Prisma.AsteroidsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>
          }
          createMany: {
            args: Prisma.AsteroidsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsteroidsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>[]
          }
          delete: {
            args: Prisma.AsteroidsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>
          }
          update: {
            args: Prisma.AsteroidsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>
          }
          deleteMany: {
            args: Prisma.AsteroidsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsteroidsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsteroidsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsteroidsPayload>
          }
          aggregate: {
            args: Prisma.AsteroidsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsteroids>
          }
          groupBy: {
            args: Prisma.AsteroidsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsteroidsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsteroidsCountArgs<ExtArgs>
            result: $Utils.Optional<AsteroidsCountAggregateOutputType> | number
          }
        }
      }
      Comets: {
        payload: Prisma.$CometsPayload<ExtArgs>
        fields: Prisma.CometsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CometsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CometsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>
          }
          findFirst: {
            args: Prisma.CometsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CometsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>
          }
          findMany: {
            args: Prisma.CometsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>[]
          }
          create: {
            args: Prisma.CometsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>
          }
          createMany: {
            args: Prisma.CometsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CometsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>[]
          }
          delete: {
            args: Prisma.CometsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>
          }
          update: {
            args: Prisma.CometsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>
          }
          deleteMany: {
            args: Prisma.CometsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CometsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CometsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CometsPayload>
          }
          aggregate: {
            args: Prisma.CometsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComets>
          }
          groupBy: {
            args: Prisma.CometsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CometsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CometsCountArgs<ExtArgs>
            result: $Utils.Optional<CometsCountAggregateOutputType> | number
          }
        }
      }
      Planets: {
        payload: Prisma.$PlanetsPayload<ExtArgs>
        fields: Prisma.PlanetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>
          }
          findFirst: {
            args: Prisma.PlanetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>
          }
          findMany: {
            args: Prisma.PlanetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>[]
          }
          create: {
            args: Prisma.PlanetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>
          }
          createMany: {
            args: Prisma.PlanetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>[]
          }
          delete: {
            args: Prisma.PlanetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>
          }
          update: {
            args: Prisma.PlanetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>
          }
          deleteMany: {
            args: Prisma.PlanetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetsPayload>
          }
          aggregate: {
            args: Prisma.PlanetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanets>
          }
          groupBy: {
            args: Prisma.PlanetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanetsCountArgs<ExtArgs>
            result: $Utils.Optional<PlanetsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Asteroids
   */

  export type AggregateAsteroids = {
    _count: AsteroidsCountAggregateOutputType | null
    _avg: AsteroidsAvgAggregateOutputType | null
    _sum: AsteroidsSumAggregateOutputType | null
    _min: AsteroidsMinAggregateOutputType | null
    _max: AsteroidsMaxAggregateOutputType | null
  }

  export type AsteroidsAvgAggregateOutputType = {
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type AsteroidsSumAggregateOutputType = {
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type AsteroidsMinAggregateOutputType = {
    full_name: string | null
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type AsteroidsMaxAggregateOutputType = {
    full_name: string | null
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type AsteroidsCountAggregateOutputType = {
    full_name: number
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
    _all: number
  }


  export type AsteroidsAvgAggregateInputType = {
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type AsteroidsSumAggregateInputType = {
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type AsteroidsMinAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type AsteroidsMaxAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type AsteroidsCountAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
    _all?: true
  }

  export type AsteroidsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asteroids to aggregate.
     */
    where?: AsteroidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asteroids to fetch.
     */
    orderBy?: AsteroidsOrderByWithRelationInput | AsteroidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsteroidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asteroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asteroids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asteroids
    **/
    _count?: true | AsteroidsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsteroidsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsteroidsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsteroidsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsteroidsMaxAggregateInputType
  }

  export type GetAsteroidsAggregateType<T extends AsteroidsAggregateArgs> = {
        [P in keyof T & keyof AggregateAsteroids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsteroids[P]>
      : GetScalarType<T[P], AggregateAsteroids[P]>
  }




  export type AsteroidsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsteroidsWhereInput
    orderBy?: AsteroidsOrderByWithAggregationInput | AsteroidsOrderByWithAggregationInput[]
    by: AsteroidsScalarFieldEnum[] | AsteroidsScalarFieldEnum
    having?: AsteroidsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsteroidsCountAggregateInputType | true
    _avg?: AsteroidsAvgAggregateInputType
    _sum?: AsteroidsSumAggregateInputType
    _min?: AsteroidsMinAggregateInputType
    _max?: AsteroidsMaxAggregateInputType
  }

  export type AsteroidsGroupByOutputType = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
    _count: AsteroidsCountAggregateOutputType | null
    _avg: AsteroidsAvgAggregateOutputType | null
    _sum: AsteroidsSumAggregateOutputType | null
    _min: AsteroidsMinAggregateOutputType | null
    _max: AsteroidsMaxAggregateOutputType | null
  }

  type GetAsteroidsGroupByPayload<T extends AsteroidsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsteroidsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsteroidsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsteroidsGroupByOutputType[P]>
            : GetScalarType<T[P], AsteroidsGroupByOutputType[P]>
        }
      >
    >


  export type AsteroidsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    longNode?: boolean
    longPeri?: boolean
    q?: boolean
    ad?: boolean
    per_y?: boolean
    data_arc?: boolean
    condition_code?: boolean
    n_obs_used?: boolean
    H?: boolean
    pha?: boolean
  }, ExtArgs["result"]["asteroids"]>

  export type AsteroidsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    longNode?: boolean
    longPeri?: boolean
    q?: boolean
    ad?: boolean
    per_y?: boolean
    data_arc?: boolean
    condition_code?: boolean
    n_obs_used?: boolean
    H?: boolean
    pha?: boolean
  }, ExtArgs["result"]["asteroids"]>

  export type AsteroidsSelectScalar = {
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    longNode?: boolean
    longPeri?: boolean
    q?: boolean
    ad?: boolean
    per_y?: boolean
    data_arc?: boolean
    condition_code?: boolean
    n_obs_used?: boolean
    H?: boolean
    pha?: boolean
  }


  export type $AsteroidsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asteroids"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      full_name: string
      a: number
      e: number
      I: number
      longNode: number
      longPeri: number
      q: number
      ad: number
      per_y: number
      data_arc: number
      condition_code: number
      n_obs_used: number
      H: number
      pha: number
    }, ExtArgs["result"]["asteroids"]>
    composites: {}
  }

  type AsteroidsGetPayload<S extends boolean | null | undefined | AsteroidsDefaultArgs> = $Result.GetResult<Prisma.$AsteroidsPayload, S>

  type AsteroidsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AsteroidsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsteroidsCountAggregateInputType | true
    }

  export interface AsteroidsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asteroids'], meta: { name: 'Asteroids' } }
    /**
     * Find zero or one Asteroids that matches the filter.
     * @param {AsteroidsFindUniqueArgs} args - Arguments to find a Asteroids
     * @example
     * // Get one Asteroids
     * const asteroids = await prisma.asteroids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsteroidsFindUniqueArgs>(args: SelectSubset<T, AsteroidsFindUniqueArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asteroids that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AsteroidsFindUniqueOrThrowArgs} args - Arguments to find a Asteroids
     * @example
     * // Get one Asteroids
     * const asteroids = await prisma.asteroids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsteroidsFindUniqueOrThrowArgs>(args: SelectSubset<T, AsteroidsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asteroids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsteroidsFindFirstArgs} args - Arguments to find a Asteroids
     * @example
     * // Get one Asteroids
     * const asteroids = await prisma.asteroids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsteroidsFindFirstArgs>(args?: SelectSubset<T, AsteroidsFindFirstArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asteroids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsteroidsFindFirstOrThrowArgs} args - Arguments to find a Asteroids
     * @example
     * // Get one Asteroids
     * const asteroids = await prisma.asteroids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsteroidsFindFirstOrThrowArgs>(args?: SelectSubset<T, AsteroidsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Asteroids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsteroidsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asteroids
     * const asteroids = await prisma.asteroids.findMany()
     * 
     * // Get first 10 Asteroids
     * const asteroids = await prisma.asteroids.findMany({ take: 10 })
     * 
     * // Only select the `full_name`
     * const asteroidsWithFull_nameOnly = await prisma.asteroids.findMany({ select: { full_name: true } })
     * 
     */
    findMany<T extends AsteroidsFindManyArgs>(args?: SelectSubset<T, AsteroidsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asteroids.
     * @param {AsteroidsCreateArgs} args - Arguments to create a Asteroids.
     * @example
     * // Create one Asteroids
     * const Asteroids = await prisma.asteroids.create({
     *   data: {
     *     // ... data to create a Asteroids
     *   }
     * })
     * 
     */
    create<T extends AsteroidsCreateArgs>(args: SelectSubset<T, AsteroidsCreateArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Asteroids.
     * @param {AsteroidsCreateManyArgs} args - Arguments to create many Asteroids.
     * @example
     * // Create many Asteroids
     * const asteroids = await prisma.asteroids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsteroidsCreateManyArgs>(args?: SelectSubset<T, AsteroidsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asteroids and returns the data saved in the database.
     * @param {AsteroidsCreateManyAndReturnArgs} args - Arguments to create many Asteroids.
     * @example
     * // Create many Asteroids
     * const asteroids = await prisma.asteroids.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asteroids and only return the `full_name`
     * const asteroidsWithFull_nameOnly = await prisma.asteroids.createManyAndReturn({ 
     *   select: { full_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsteroidsCreateManyAndReturnArgs>(args?: SelectSubset<T, AsteroidsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Asteroids.
     * @param {AsteroidsDeleteArgs} args - Arguments to delete one Asteroids.
     * @example
     * // Delete one Asteroids
     * const Asteroids = await prisma.asteroids.delete({
     *   where: {
     *     // ... filter to delete one Asteroids
     *   }
     * })
     * 
     */
    delete<T extends AsteroidsDeleteArgs>(args: SelectSubset<T, AsteroidsDeleteArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asteroids.
     * @param {AsteroidsUpdateArgs} args - Arguments to update one Asteroids.
     * @example
     * // Update one Asteroids
     * const asteroids = await prisma.asteroids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsteroidsUpdateArgs>(args: SelectSubset<T, AsteroidsUpdateArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Asteroids.
     * @param {AsteroidsDeleteManyArgs} args - Arguments to filter Asteroids to delete.
     * @example
     * // Delete a few Asteroids
     * const { count } = await prisma.asteroids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsteroidsDeleteManyArgs>(args?: SelectSubset<T, AsteroidsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asteroids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsteroidsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asteroids
     * const asteroids = await prisma.asteroids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsteroidsUpdateManyArgs>(args: SelectSubset<T, AsteroidsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asteroids.
     * @param {AsteroidsUpsertArgs} args - Arguments to update or create a Asteroids.
     * @example
     * // Update or create a Asteroids
     * const asteroids = await prisma.asteroids.upsert({
     *   create: {
     *     // ... data to create a Asteroids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asteroids we want to update
     *   }
     * })
     */
    upsert<T extends AsteroidsUpsertArgs>(args: SelectSubset<T, AsteroidsUpsertArgs<ExtArgs>>): Prisma__AsteroidsClient<$Result.GetResult<Prisma.$AsteroidsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Asteroids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsteroidsCountArgs} args - Arguments to filter Asteroids to count.
     * @example
     * // Count the number of Asteroids
     * const count = await prisma.asteroids.count({
     *   where: {
     *     // ... the filter for the Asteroids we want to count
     *   }
     * })
    **/
    count<T extends AsteroidsCountArgs>(
      args?: Subset<T, AsteroidsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsteroidsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asteroids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsteroidsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsteroidsAggregateArgs>(args: Subset<T, AsteroidsAggregateArgs>): Prisma.PrismaPromise<GetAsteroidsAggregateType<T>>

    /**
     * Group by Asteroids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsteroidsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsteroidsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsteroidsGroupByArgs['orderBy'] }
        : { orderBy?: AsteroidsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsteroidsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsteroidsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asteroids model
   */
  readonly fields: AsteroidsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asteroids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsteroidsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asteroids model
   */ 
  interface AsteroidsFieldRefs {
    readonly full_name: FieldRef<"Asteroids", 'String'>
    readonly a: FieldRef<"Asteroids", 'Float'>
    readonly e: FieldRef<"Asteroids", 'Float'>
    readonly I: FieldRef<"Asteroids", 'Float'>
    readonly longNode: FieldRef<"Asteroids", 'Float'>
    readonly longPeri: FieldRef<"Asteroids", 'Float'>
    readonly q: FieldRef<"Asteroids", 'Float'>
    readonly ad: FieldRef<"Asteroids", 'Float'>
    readonly per_y: FieldRef<"Asteroids", 'Float'>
    readonly data_arc: FieldRef<"Asteroids", 'Float'>
    readonly condition_code: FieldRef<"Asteroids", 'Float'>
    readonly n_obs_used: FieldRef<"Asteroids", 'Float'>
    readonly H: FieldRef<"Asteroids", 'Float'>
    readonly pha: FieldRef<"Asteroids", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Asteroids findUnique
   */
  export type AsteroidsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * Filter, which Asteroids to fetch.
     */
    where: AsteroidsWhereUniqueInput
  }

  /**
   * Asteroids findUniqueOrThrow
   */
  export type AsteroidsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * Filter, which Asteroids to fetch.
     */
    where: AsteroidsWhereUniqueInput
  }

  /**
   * Asteroids findFirst
   */
  export type AsteroidsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * Filter, which Asteroids to fetch.
     */
    where?: AsteroidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asteroids to fetch.
     */
    orderBy?: AsteroidsOrderByWithRelationInput | AsteroidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asteroids.
     */
    cursor?: AsteroidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asteroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asteroids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asteroids.
     */
    distinct?: AsteroidsScalarFieldEnum | AsteroidsScalarFieldEnum[]
  }

  /**
   * Asteroids findFirstOrThrow
   */
  export type AsteroidsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * Filter, which Asteroids to fetch.
     */
    where?: AsteroidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asteroids to fetch.
     */
    orderBy?: AsteroidsOrderByWithRelationInput | AsteroidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asteroids.
     */
    cursor?: AsteroidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asteroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asteroids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asteroids.
     */
    distinct?: AsteroidsScalarFieldEnum | AsteroidsScalarFieldEnum[]
  }

  /**
   * Asteroids findMany
   */
  export type AsteroidsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * Filter, which Asteroids to fetch.
     */
    where?: AsteroidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asteroids to fetch.
     */
    orderBy?: AsteroidsOrderByWithRelationInput | AsteroidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asteroids.
     */
    cursor?: AsteroidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asteroids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asteroids.
     */
    skip?: number
    distinct?: AsteroidsScalarFieldEnum | AsteroidsScalarFieldEnum[]
  }

  /**
   * Asteroids create
   */
  export type AsteroidsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * The data needed to create a Asteroids.
     */
    data: XOR<AsteroidsCreateInput, AsteroidsUncheckedCreateInput>
  }

  /**
   * Asteroids createMany
   */
  export type AsteroidsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asteroids.
     */
    data: AsteroidsCreateManyInput | AsteroidsCreateManyInput[]
  }

  /**
   * Asteroids createManyAndReturn
   */
  export type AsteroidsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Asteroids.
     */
    data: AsteroidsCreateManyInput | AsteroidsCreateManyInput[]
  }

  /**
   * Asteroids update
   */
  export type AsteroidsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * The data needed to update a Asteroids.
     */
    data: XOR<AsteroidsUpdateInput, AsteroidsUncheckedUpdateInput>
    /**
     * Choose, which Asteroids to update.
     */
    where: AsteroidsWhereUniqueInput
  }

  /**
   * Asteroids updateMany
   */
  export type AsteroidsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asteroids.
     */
    data: XOR<AsteroidsUpdateManyMutationInput, AsteroidsUncheckedUpdateManyInput>
    /**
     * Filter which Asteroids to update
     */
    where?: AsteroidsWhereInput
  }

  /**
   * Asteroids upsert
   */
  export type AsteroidsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * The filter to search for the Asteroids to update in case it exists.
     */
    where: AsteroidsWhereUniqueInput
    /**
     * In case the Asteroids found by the `where` argument doesn't exist, create a new Asteroids with this data.
     */
    create: XOR<AsteroidsCreateInput, AsteroidsUncheckedCreateInput>
    /**
     * In case the Asteroids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsteroidsUpdateInput, AsteroidsUncheckedUpdateInput>
  }

  /**
   * Asteroids delete
   */
  export type AsteroidsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
    /**
     * Filter which Asteroids to delete.
     */
    where: AsteroidsWhereUniqueInput
  }

  /**
   * Asteroids deleteMany
   */
  export type AsteroidsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asteroids to delete
     */
    where?: AsteroidsWhereInput
  }

  /**
   * Asteroids without action
   */
  export type AsteroidsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asteroids
     */
    select?: AsteroidsSelect<ExtArgs> | null
  }


  /**
   * Model Comets
   */

  export type AggregateComets = {
    _count: CometsCountAggregateOutputType | null
    _avg: CometsAvgAggregateOutputType | null
    _sum: CometsSumAggregateOutputType | null
    _min: CometsMinAggregateOutputType | null
    _max: CometsMaxAggregateOutputType | null
  }

  export type CometsAvgAggregateOutputType = {
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type CometsSumAggregateOutputType = {
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type CometsMinAggregateOutputType = {
    full_name: string | null
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type CometsMaxAggregateOutputType = {
    full_name: string | null
    a: number | null
    e: number | null
    I: number | null
    longNode: number | null
    longPeri: number | null
    q: number | null
    ad: number | null
    per_y: number | null
    data_arc: number | null
    condition_code: number | null
    n_obs_used: number | null
    H: number | null
    pha: number | null
  }

  export type CometsCountAggregateOutputType = {
    full_name: number
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
    _all: number
  }


  export type CometsAvgAggregateInputType = {
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type CometsSumAggregateInputType = {
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type CometsMinAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type CometsMaxAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
  }

  export type CometsCountAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    longNode?: true
    longPeri?: true
    q?: true
    ad?: true
    per_y?: true
    data_arc?: true
    condition_code?: true
    n_obs_used?: true
    H?: true
    pha?: true
    _all?: true
  }

  export type CometsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comets to aggregate.
     */
    where?: CometsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comets to fetch.
     */
    orderBy?: CometsOrderByWithRelationInput | CometsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CometsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comets
    **/
    _count?: true | CometsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CometsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CometsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CometsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CometsMaxAggregateInputType
  }

  export type GetCometsAggregateType<T extends CometsAggregateArgs> = {
        [P in keyof T & keyof AggregateComets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComets[P]>
      : GetScalarType<T[P], AggregateComets[P]>
  }




  export type CometsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CometsWhereInput
    orderBy?: CometsOrderByWithAggregationInput | CometsOrderByWithAggregationInput[]
    by: CometsScalarFieldEnum[] | CometsScalarFieldEnum
    having?: CometsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CometsCountAggregateInputType | true
    _avg?: CometsAvgAggregateInputType
    _sum?: CometsSumAggregateInputType
    _min?: CometsMinAggregateInputType
    _max?: CometsMaxAggregateInputType
  }

  export type CometsGroupByOutputType = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
    _count: CometsCountAggregateOutputType | null
    _avg: CometsAvgAggregateOutputType | null
    _sum: CometsSumAggregateOutputType | null
    _min: CometsMinAggregateOutputType | null
    _max: CometsMaxAggregateOutputType | null
  }

  type GetCometsGroupByPayload<T extends CometsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CometsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CometsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CometsGroupByOutputType[P]>
            : GetScalarType<T[P], CometsGroupByOutputType[P]>
        }
      >
    >


  export type CometsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    longNode?: boolean
    longPeri?: boolean
    q?: boolean
    ad?: boolean
    per_y?: boolean
    data_arc?: boolean
    condition_code?: boolean
    n_obs_used?: boolean
    H?: boolean
    pha?: boolean
  }, ExtArgs["result"]["comets"]>

  export type CometsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    longNode?: boolean
    longPeri?: boolean
    q?: boolean
    ad?: boolean
    per_y?: boolean
    data_arc?: boolean
    condition_code?: boolean
    n_obs_used?: boolean
    H?: boolean
    pha?: boolean
  }, ExtArgs["result"]["comets"]>

  export type CometsSelectScalar = {
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    longNode?: boolean
    longPeri?: boolean
    q?: boolean
    ad?: boolean
    per_y?: boolean
    data_arc?: boolean
    condition_code?: boolean
    n_obs_used?: boolean
    H?: boolean
    pha?: boolean
  }


  export type $CometsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      full_name: string
      a: number
      e: number
      I: number
      longNode: number
      longPeri: number
      q: number
      ad: number
      per_y: number
      data_arc: number
      condition_code: number
      n_obs_used: number
      H: number
      pha: number
    }, ExtArgs["result"]["comets"]>
    composites: {}
  }

  type CometsGetPayload<S extends boolean | null | undefined | CometsDefaultArgs> = $Result.GetResult<Prisma.$CometsPayload, S>

  type CometsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CometsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CometsCountAggregateInputType | true
    }

  export interface CometsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comets'], meta: { name: 'Comets' } }
    /**
     * Find zero or one Comets that matches the filter.
     * @param {CometsFindUniqueArgs} args - Arguments to find a Comets
     * @example
     * // Get one Comets
     * const comets = await prisma.comets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CometsFindUniqueArgs>(args: SelectSubset<T, CometsFindUniqueArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CometsFindUniqueOrThrowArgs} args - Arguments to find a Comets
     * @example
     * // Get one Comets
     * const comets = await prisma.comets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CometsFindUniqueOrThrowArgs>(args: SelectSubset<T, CometsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CometsFindFirstArgs} args - Arguments to find a Comets
     * @example
     * // Get one Comets
     * const comets = await prisma.comets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CometsFindFirstArgs>(args?: SelectSubset<T, CometsFindFirstArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CometsFindFirstOrThrowArgs} args - Arguments to find a Comets
     * @example
     * // Get one Comets
     * const comets = await prisma.comets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CometsFindFirstOrThrowArgs>(args?: SelectSubset<T, CometsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CometsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comets
     * const comets = await prisma.comets.findMany()
     * 
     * // Get first 10 Comets
     * const comets = await prisma.comets.findMany({ take: 10 })
     * 
     * // Only select the `full_name`
     * const cometsWithFull_nameOnly = await prisma.comets.findMany({ select: { full_name: true } })
     * 
     */
    findMany<T extends CometsFindManyArgs>(args?: SelectSubset<T, CometsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comets.
     * @param {CometsCreateArgs} args - Arguments to create a Comets.
     * @example
     * // Create one Comets
     * const Comets = await prisma.comets.create({
     *   data: {
     *     // ... data to create a Comets
     *   }
     * })
     * 
     */
    create<T extends CometsCreateArgs>(args: SelectSubset<T, CometsCreateArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comets.
     * @param {CometsCreateManyArgs} args - Arguments to create many Comets.
     * @example
     * // Create many Comets
     * const comets = await prisma.comets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CometsCreateManyArgs>(args?: SelectSubset<T, CometsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comets and returns the data saved in the database.
     * @param {CometsCreateManyAndReturnArgs} args - Arguments to create many Comets.
     * @example
     * // Create many Comets
     * const comets = await prisma.comets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comets and only return the `full_name`
     * const cometsWithFull_nameOnly = await prisma.comets.createManyAndReturn({ 
     *   select: { full_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CometsCreateManyAndReturnArgs>(args?: SelectSubset<T, CometsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comets.
     * @param {CometsDeleteArgs} args - Arguments to delete one Comets.
     * @example
     * // Delete one Comets
     * const Comets = await prisma.comets.delete({
     *   where: {
     *     // ... filter to delete one Comets
     *   }
     * })
     * 
     */
    delete<T extends CometsDeleteArgs>(args: SelectSubset<T, CometsDeleteArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comets.
     * @param {CometsUpdateArgs} args - Arguments to update one Comets.
     * @example
     * // Update one Comets
     * const comets = await prisma.comets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CometsUpdateArgs>(args: SelectSubset<T, CometsUpdateArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comets.
     * @param {CometsDeleteManyArgs} args - Arguments to filter Comets to delete.
     * @example
     * // Delete a few Comets
     * const { count } = await prisma.comets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CometsDeleteManyArgs>(args?: SelectSubset<T, CometsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CometsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comets
     * const comets = await prisma.comets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CometsUpdateManyArgs>(args: SelectSubset<T, CometsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comets.
     * @param {CometsUpsertArgs} args - Arguments to update or create a Comets.
     * @example
     * // Update or create a Comets
     * const comets = await prisma.comets.upsert({
     *   create: {
     *     // ... data to create a Comets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comets we want to update
     *   }
     * })
     */
    upsert<T extends CometsUpsertArgs>(args: SelectSubset<T, CometsUpsertArgs<ExtArgs>>): Prisma__CometsClient<$Result.GetResult<Prisma.$CometsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CometsCountArgs} args - Arguments to filter Comets to count.
     * @example
     * // Count the number of Comets
     * const count = await prisma.comets.count({
     *   where: {
     *     // ... the filter for the Comets we want to count
     *   }
     * })
    **/
    count<T extends CometsCountArgs>(
      args?: Subset<T, CometsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CometsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CometsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CometsAggregateArgs>(args: Subset<T, CometsAggregateArgs>): Prisma.PrismaPromise<GetCometsAggregateType<T>>

    /**
     * Group by Comets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CometsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CometsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CometsGroupByArgs['orderBy'] }
        : { orderBy?: CometsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CometsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCometsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comets model
   */
  readonly fields: CometsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CometsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comets model
   */ 
  interface CometsFieldRefs {
    readonly full_name: FieldRef<"Comets", 'String'>
    readonly a: FieldRef<"Comets", 'Float'>
    readonly e: FieldRef<"Comets", 'Float'>
    readonly I: FieldRef<"Comets", 'Float'>
    readonly longNode: FieldRef<"Comets", 'Float'>
    readonly longPeri: FieldRef<"Comets", 'Float'>
    readonly q: FieldRef<"Comets", 'Float'>
    readonly ad: FieldRef<"Comets", 'Float'>
    readonly per_y: FieldRef<"Comets", 'Float'>
    readonly data_arc: FieldRef<"Comets", 'Float'>
    readonly condition_code: FieldRef<"Comets", 'Float'>
    readonly n_obs_used: FieldRef<"Comets", 'Float'>
    readonly H: FieldRef<"Comets", 'Float'>
    readonly pha: FieldRef<"Comets", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Comets findUnique
   */
  export type CometsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * Filter, which Comets to fetch.
     */
    where: CometsWhereUniqueInput
  }

  /**
   * Comets findUniqueOrThrow
   */
  export type CometsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * Filter, which Comets to fetch.
     */
    where: CometsWhereUniqueInput
  }

  /**
   * Comets findFirst
   */
  export type CometsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * Filter, which Comets to fetch.
     */
    where?: CometsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comets to fetch.
     */
    orderBy?: CometsOrderByWithRelationInput | CometsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comets.
     */
    cursor?: CometsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comets.
     */
    distinct?: CometsScalarFieldEnum | CometsScalarFieldEnum[]
  }

  /**
   * Comets findFirstOrThrow
   */
  export type CometsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * Filter, which Comets to fetch.
     */
    where?: CometsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comets to fetch.
     */
    orderBy?: CometsOrderByWithRelationInput | CometsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comets.
     */
    cursor?: CometsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comets.
     */
    distinct?: CometsScalarFieldEnum | CometsScalarFieldEnum[]
  }

  /**
   * Comets findMany
   */
  export type CometsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * Filter, which Comets to fetch.
     */
    where?: CometsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comets to fetch.
     */
    orderBy?: CometsOrderByWithRelationInput | CometsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comets.
     */
    cursor?: CometsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comets.
     */
    skip?: number
    distinct?: CometsScalarFieldEnum | CometsScalarFieldEnum[]
  }

  /**
   * Comets create
   */
  export type CometsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * The data needed to create a Comets.
     */
    data: XOR<CometsCreateInput, CometsUncheckedCreateInput>
  }

  /**
   * Comets createMany
   */
  export type CometsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comets.
     */
    data: CometsCreateManyInput | CometsCreateManyInput[]
  }

  /**
   * Comets createManyAndReturn
   */
  export type CometsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comets.
     */
    data: CometsCreateManyInput | CometsCreateManyInput[]
  }

  /**
   * Comets update
   */
  export type CometsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * The data needed to update a Comets.
     */
    data: XOR<CometsUpdateInput, CometsUncheckedUpdateInput>
    /**
     * Choose, which Comets to update.
     */
    where: CometsWhereUniqueInput
  }

  /**
   * Comets updateMany
   */
  export type CometsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comets.
     */
    data: XOR<CometsUpdateManyMutationInput, CometsUncheckedUpdateManyInput>
    /**
     * Filter which Comets to update
     */
    where?: CometsWhereInput
  }

  /**
   * Comets upsert
   */
  export type CometsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * The filter to search for the Comets to update in case it exists.
     */
    where: CometsWhereUniqueInput
    /**
     * In case the Comets found by the `where` argument doesn't exist, create a new Comets with this data.
     */
    create: XOR<CometsCreateInput, CometsUncheckedCreateInput>
    /**
     * In case the Comets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CometsUpdateInput, CometsUncheckedUpdateInput>
  }

  /**
   * Comets delete
   */
  export type CometsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
    /**
     * Filter which Comets to delete.
     */
    where: CometsWhereUniqueInput
  }

  /**
   * Comets deleteMany
   */
  export type CometsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comets to delete
     */
    where?: CometsWhereInput
  }

  /**
   * Comets without action
   */
  export type CometsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comets
     */
    select?: CometsSelect<ExtArgs> | null
  }


  /**
   * Model Planets
   */

  export type AggregatePlanets = {
    _count: PlanetsCountAggregateOutputType | null
    _avg: PlanetsAvgAggregateOutputType | null
    _sum: PlanetsSumAggregateOutputType | null
    _min: PlanetsMinAggregateOutputType | null
    _max: PlanetsMaxAggregateOutputType | null
  }

  export type PlanetsAvgAggregateOutputType = {
    a: number | null
    e: number | null
    I: number | null
    L: number | null
    longPeri: number | null
    longNode: number | null
    size: number | null
    axialTilt: number | null
    rotPeriod: number | null
  }

  export type PlanetsSumAggregateOutputType = {
    a: number | null
    e: number | null
    I: number | null
    L: number | null
    longPeri: number | null
    longNode: number | null
    size: number | null
    axialTilt: number | null
    rotPeriod: number | null
  }

  export type PlanetsMinAggregateOutputType = {
    full_name: string | null
    a: number | null
    e: number | null
    I: number | null
    L: number | null
    longPeri: number | null
    longNode: number | null
    size: number | null
    axialTilt: number | null
    rotPeriod: number | null
    tex: string | null
  }

  export type PlanetsMaxAggregateOutputType = {
    full_name: string | null
    a: number | null
    e: number | null
    I: number | null
    L: number | null
    longPeri: number | null
    longNode: number | null
    size: number | null
    axialTilt: number | null
    rotPeriod: number | null
    tex: string | null
  }

  export type PlanetsCountAggregateOutputType = {
    full_name: number
    a: number
    e: number
    I: number
    L: number
    longPeri: number
    longNode: number
    size: number
    axialTilt: number
    rotPeriod: number
    tex: number
    _all: number
  }


  export type PlanetsAvgAggregateInputType = {
    a?: true
    e?: true
    I?: true
    L?: true
    longPeri?: true
    longNode?: true
    size?: true
    axialTilt?: true
    rotPeriod?: true
  }

  export type PlanetsSumAggregateInputType = {
    a?: true
    e?: true
    I?: true
    L?: true
    longPeri?: true
    longNode?: true
    size?: true
    axialTilt?: true
    rotPeriod?: true
  }

  export type PlanetsMinAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    L?: true
    longPeri?: true
    longNode?: true
    size?: true
    axialTilt?: true
    rotPeriod?: true
    tex?: true
  }

  export type PlanetsMaxAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    L?: true
    longPeri?: true
    longNode?: true
    size?: true
    axialTilt?: true
    rotPeriod?: true
    tex?: true
  }

  export type PlanetsCountAggregateInputType = {
    full_name?: true
    a?: true
    e?: true
    I?: true
    L?: true
    longPeri?: true
    longNode?: true
    size?: true
    axialTilt?: true
    rotPeriod?: true
    tex?: true
    _all?: true
  }

  export type PlanetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planets to aggregate.
     */
    where?: PlanetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetsOrderByWithRelationInput | PlanetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planets
    **/
    _count?: true | PlanetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanetsMaxAggregateInputType
  }

  export type GetPlanetsAggregateType<T extends PlanetsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanets[P]>
      : GetScalarType<T[P], AggregatePlanets[P]>
  }




  export type PlanetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanetsWhereInput
    orderBy?: PlanetsOrderByWithAggregationInput | PlanetsOrderByWithAggregationInput[]
    by: PlanetsScalarFieldEnum[] | PlanetsScalarFieldEnum
    having?: PlanetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanetsCountAggregateInputType | true
    _avg?: PlanetsAvgAggregateInputType
    _sum?: PlanetsSumAggregateInputType
    _min?: PlanetsMinAggregateInputType
    _max?: PlanetsMaxAggregateInputType
  }

  export type PlanetsGroupByOutputType = {
    full_name: string
    a: number
    e: number
    I: number
    L: number
    longPeri: number
    longNode: number
    size: number
    axialTilt: number
    rotPeriod: number
    tex: string
    _count: PlanetsCountAggregateOutputType | null
    _avg: PlanetsAvgAggregateOutputType | null
    _sum: PlanetsSumAggregateOutputType | null
    _min: PlanetsMinAggregateOutputType | null
    _max: PlanetsMaxAggregateOutputType | null
  }

  type GetPlanetsGroupByPayload<T extends PlanetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanetsGroupByOutputType[P]>
            : GetScalarType<T[P], PlanetsGroupByOutputType[P]>
        }
      >
    >


  export type PlanetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    L?: boolean
    longPeri?: boolean
    longNode?: boolean
    size?: boolean
    axialTilt?: boolean
    rotPeriod?: boolean
    tex?: boolean
  }, ExtArgs["result"]["planets"]>

  export type PlanetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    L?: boolean
    longPeri?: boolean
    longNode?: boolean
    size?: boolean
    axialTilt?: boolean
    rotPeriod?: boolean
    tex?: boolean
  }, ExtArgs["result"]["planets"]>

  export type PlanetsSelectScalar = {
    full_name?: boolean
    a?: boolean
    e?: boolean
    I?: boolean
    L?: boolean
    longPeri?: boolean
    longNode?: boolean
    size?: boolean
    axialTilt?: boolean
    rotPeriod?: boolean
    tex?: boolean
  }


  export type $PlanetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      full_name: string
      a: number
      e: number
      I: number
      L: number
      longPeri: number
      longNode: number
      size: number
      axialTilt: number
      rotPeriod: number
      tex: string
    }, ExtArgs["result"]["planets"]>
    composites: {}
  }

  type PlanetsGetPayload<S extends boolean | null | undefined | PlanetsDefaultArgs> = $Result.GetResult<Prisma.$PlanetsPayload, S>

  type PlanetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanetsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanetsCountAggregateInputType | true
    }

  export interface PlanetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planets'], meta: { name: 'Planets' } }
    /**
     * Find zero or one Planets that matches the filter.
     * @param {PlanetsFindUniqueArgs} args - Arguments to find a Planets
     * @example
     * // Get one Planets
     * const planets = await prisma.planets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanetsFindUniqueArgs>(args: SelectSubset<T, PlanetsFindUniqueArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Planets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanetsFindUniqueOrThrowArgs} args - Arguments to find a Planets
     * @example
     * // Get one Planets
     * const planets = await prisma.planets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanetsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Planets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetsFindFirstArgs} args - Arguments to find a Planets
     * @example
     * // Get one Planets
     * const planets = await prisma.planets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanetsFindFirstArgs>(args?: SelectSubset<T, PlanetsFindFirstArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Planets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetsFindFirstOrThrowArgs} args - Arguments to find a Planets
     * @example
     * // Get one Planets
     * const planets = await prisma.planets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanetsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Planets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planets
     * const planets = await prisma.planets.findMany()
     * 
     * // Get first 10 Planets
     * const planets = await prisma.planets.findMany({ take: 10 })
     * 
     * // Only select the `full_name`
     * const planetsWithFull_nameOnly = await prisma.planets.findMany({ select: { full_name: true } })
     * 
     */
    findMany<T extends PlanetsFindManyArgs>(args?: SelectSubset<T, PlanetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Planets.
     * @param {PlanetsCreateArgs} args - Arguments to create a Planets.
     * @example
     * // Create one Planets
     * const Planets = await prisma.planets.create({
     *   data: {
     *     // ... data to create a Planets
     *   }
     * })
     * 
     */
    create<T extends PlanetsCreateArgs>(args: SelectSubset<T, PlanetsCreateArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Planets.
     * @param {PlanetsCreateManyArgs} args - Arguments to create many Planets.
     * @example
     * // Create many Planets
     * const planets = await prisma.planets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanetsCreateManyArgs>(args?: SelectSubset<T, PlanetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Planets and returns the data saved in the database.
     * @param {PlanetsCreateManyAndReturnArgs} args - Arguments to create many Planets.
     * @example
     * // Create many Planets
     * const planets = await prisma.planets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Planets and only return the `full_name`
     * const planetsWithFull_nameOnly = await prisma.planets.createManyAndReturn({ 
     *   select: { full_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanetsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Planets.
     * @param {PlanetsDeleteArgs} args - Arguments to delete one Planets.
     * @example
     * // Delete one Planets
     * const Planets = await prisma.planets.delete({
     *   where: {
     *     // ... filter to delete one Planets
     *   }
     * })
     * 
     */
    delete<T extends PlanetsDeleteArgs>(args: SelectSubset<T, PlanetsDeleteArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Planets.
     * @param {PlanetsUpdateArgs} args - Arguments to update one Planets.
     * @example
     * // Update one Planets
     * const planets = await prisma.planets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanetsUpdateArgs>(args: SelectSubset<T, PlanetsUpdateArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Planets.
     * @param {PlanetsDeleteManyArgs} args - Arguments to filter Planets to delete.
     * @example
     * // Delete a few Planets
     * const { count } = await prisma.planets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanetsDeleteManyArgs>(args?: SelectSubset<T, PlanetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planets
     * const planets = await prisma.planets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanetsUpdateManyArgs>(args: SelectSubset<T, PlanetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planets.
     * @param {PlanetsUpsertArgs} args - Arguments to update or create a Planets.
     * @example
     * // Update or create a Planets
     * const planets = await prisma.planets.upsert({
     *   create: {
     *     // ... data to create a Planets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planets we want to update
     *   }
     * })
     */
    upsert<T extends PlanetsUpsertArgs>(args: SelectSubset<T, PlanetsUpsertArgs<ExtArgs>>): Prisma__PlanetsClient<$Result.GetResult<Prisma.$PlanetsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetsCountArgs} args - Arguments to filter Planets to count.
     * @example
     * // Count the number of Planets
     * const count = await prisma.planets.count({
     *   where: {
     *     // ... the filter for the Planets we want to count
     *   }
     * })
    **/
    count<T extends PlanetsCountArgs>(
      args?: Subset<T, PlanetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanetsAggregateArgs>(args: Subset<T, PlanetsAggregateArgs>): Prisma.PrismaPromise<GetPlanetsAggregateType<T>>

    /**
     * Group by Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanetsGroupByArgs['orderBy'] }
        : { orderBy?: PlanetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planets model
   */
  readonly fields: PlanetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Planets model
   */ 
  interface PlanetsFieldRefs {
    readonly full_name: FieldRef<"Planets", 'String'>
    readonly a: FieldRef<"Planets", 'Float'>
    readonly e: FieldRef<"Planets", 'Float'>
    readonly I: FieldRef<"Planets", 'Float'>
    readonly L: FieldRef<"Planets", 'Float'>
    readonly longPeri: FieldRef<"Planets", 'Float'>
    readonly longNode: FieldRef<"Planets", 'Float'>
    readonly size: FieldRef<"Planets", 'Float'>
    readonly axialTilt: FieldRef<"Planets", 'Float'>
    readonly rotPeriod: FieldRef<"Planets", 'Float'>
    readonly tex: FieldRef<"Planets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Planets findUnique
   */
  export type PlanetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * Filter, which Planets to fetch.
     */
    where: PlanetsWhereUniqueInput
  }

  /**
   * Planets findUniqueOrThrow
   */
  export type PlanetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * Filter, which Planets to fetch.
     */
    where: PlanetsWhereUniqueInput
  }

  /**
   * Planets findFirst
   */
  export type PlanetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * Filter, which Planets to fetch.
     */
    where?: PlanetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetsOrderByWithRelationInput | PlanetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planets.
     */
    cursor?: PlanetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     */
    distinct?: PlanetsScalarFieldEnum | PlanetsScalarFieldEnum[]
  }

  /**
   * Planets findFirstOrThrow
   */
  export type PlanetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * Filter, which Planets to fetch.
     */
    where?: PlanetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetsOrderByWithRelationInput | PlanetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planets.
     */
    cursor?: PlanetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     */
    distinct?: PlanetsScalarFieldEnum | PlanetsScalarFieldEnum[]
  }

  /**
   * Planets findMany
   */
  export type PlanetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * Filter, which Planets to fetch.
     */
    where?: PlanetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetsOrderByWithRelationInput | PlanetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planets.
     */
    cursor?: PlanetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    distinct?: PlanetsScalarFieldEnum | PlanetsScalarFieldEnum[]
  }

  /**
   * Planets create
   */
  export type PlanetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * The data needed to create a Planets.
     */
    data: XOR<PlanetsCreateInput, PlanetsUncheckedCreateInput>
  }

  /**
   * Planets createMany
   */
  export type PlanetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planets.
     */
    data: PlanetsCreateManyInput | PlanetsCreateManyInput[]
  }

  /**
   * Planets createManyAndReturn
   */
  export type PlanetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Planets.
     */
    data: PlanetsCreateManyInput | PlanetsCreateManyInput[]
  }

  /**
   * Planets update
   */
  export type PlanetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * The data needed to update a Planets.
     */
    data: XOR<PlanetsUpdateInput, PlanetsUncheckedUpdateInput>
    /**
     * Choose, which Planets to update.
     */
    where: PlanetsWhereUniqueInput
  }

  /**
   * Planets updateMany
   */
  export type PlanetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planets.
     */
    data: XOR<PlanetsUpdateManyMutationInput, PlanetsUncheckedUpdateManyInput>
    /**
     * Filter which Planets to update
     */
    where?: PlanetsWhereInput
  }

  /**
   * Planets upsert
   */
  export type PlanetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * The filter to search for the Planets to update in case it exists.
     */
    where: PlanetsWhereUniqueInput
    /**
     * In case the Planets found by the `where` argument doesn't exist, create a new Planets with this data.
     */
    create: XOR<PlanetsCreateInput, PlanetsUncheckedCreateInput>
    /**
     * In case the Planets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanetsUpdateInput, PlanetsUncheckedUpdateInput>
  }

  /**
   * Planets delete
   */
  export type PlanetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
    /**
     * Filter which Planets to delete.
     */
    where: PlanetsWhereUniqueInput
  }

  /**
   * Planets deleteMany
   */
  export type PlanetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planets to delete
     */
    where?: PlanetsWhereInput
  }

  /**
   * Planets without action
   */
  export type PlanetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planets
     */
    select?: PlanetsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AsteroidsScalarFieldEnum: {
    full_name: 'full_name',
    a: 'a',
    e: 'e',
    I: 'I',
    longNode: 'longNode',
    longPeri: 'longPeri',
    q: 'q',
    ad: 'ad',
    per_y: 'per_y',
    data_arc: 'data_arc',
    condition_code: 'condition_code',
    n_obs_used: 'n_obs_used',
    H: 'H',
    pha: 'pha'
  };

  export type AsteroidsScalarFieldEnum = (typeof AsteroidsScalarFieldEnum)[keyof typeof AsteroidsScalarFieldEnum]


  export const CometsScalarFieldEnum: {
    full_name: 'full_name',
    a: 'a',
    e: 'e',
    I: 'I',
    longNode: 'longNode',
    longPeri: 'longPeri',
    q: 'q',
    ad: 'ad',
    per_y: 'per_y',
    data_arc: 'data_arc',
    condition_code: 'condition_code',
    n_obs_used: 'n_obs_used',
    H: 'H',
    pha: 'pha'
  };

  export type CometsScalarFieldEnum = (typeof CometsScalarFieldEnum)[keyof typeof CometsScalarFieldEnum]


  export const PlanetsScalarFieldEnum: {
    full_name: 'full_name',
    a: 'a',
    e: 'e',
    I: 'I',
    L: 'L',
    longPeri: 'longPeri',
    longNode: 'longNode',
    size: 'size',
    axialTilt: 'axialTilt',
    rotPeriod: 'rotPeriod',
    tex: 'tex'
  };

  export type PlanetsScalarFieldEnum = (typeof PlanetsScalarFieldEnum)[keyof typeof PlanetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AsteroidsWhereInput = {
    AND?: AsteroidsWhereInput | AsteroidsWhereInput[]
    OR?: AsteroidsWhereInput[]
    NOT?: AsteroidsWhereInput | AsteroidsWhereInput[]
    full_name?: StringFilter<"Asteroids"> | string
    a?: FloatFilter<"Asteroids"> | number
    e?: FloatFilter<"Asteroids"> | number
    I?: FloatFilter<"Asteroids"> | number
    longNode?: FloatFilter<"Asteroids"> | number
    longPeri?: FloatFilter<"Asteroids"> | number
    q?: FloatFilter<"Asteroids"> | number
    ad?: FloatFilter<"Asteroids"> | number
    per_y?: FloatFilter<"Asteroids"> | number
    data_arc?: FloatFilter<"Asteroids"> | number
    condition_code?: FloatFilter<"Asteroids"> | number
    n_obs_used?: FloatFilter<"Asteroids"> | number
    H?: FloatFilter<"Asteroids"> | number
    pha?: FloatFilter<"Asteroids"> | number
  }

  export type AsteroidsOrderByWithRelationInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type AsteroidsWhereUniqueInput = Prisma.AtLeast<{
    full_name?: string
    AND?: AsteroidsWhereInput | AsteroidsWhereInput[]
    OR?: AsteroidsWhereInput[]
    NOT?: AsteroidsWhereInput | AsteroidsWhereInput[]
    a?: FloatFilter<"Asteroids"> | number
    e?: FloatFilter<"Asteroids"> | number
    I?: FloatFilter<"Asteroids"> | number
    longNode?: FloatFilter<"Asteroids"> | number
    longPeri?: FloatFilter<"Asteroids"> | number
    q?: FloatFilter<"Asteroids"> | number
    ad?: FloatFilter<"Asteroids"> | number
    per_y?: FloatFilter<"Asteroids"> | number
    data_arc?: FloatFilter<"Asteroids"> | number
    condition_code?: FloatFilter<"Asteroids"> | number
    n_obs_used?: FloatFilter<"Asteroids"> | number
    H?: FloatFilter<"Asteroids"> | number
    pha?: FloatFilter<"Asteroids"> | number
  }, "full_name">

  export type AsteroidsOrderByWithAggregationInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
    _count?: AsteroidsCountOrderByAggregateInput
    _avg?: AsteroidsAvgOrderByAggregateInput
    _max?: AsteroidsMaxOrderByAggregateInput
    _min?: AsteroidsMinOrderByAggregateInput
    _sum?: AsteroidsSumOrderByAggregateInput
  }

  export type AsteroidsScalarWhereWithAggregatesInput = {
    AND?: AsteroidsScalarWhereWithAggregatesInput | AsteroidsScalarWhereWithAggregatesInput[]
    OR?: AsteroidsScalarWhereWithAggregatesInput[]
    NOT?: AsteroidsScalarWhereWithAggregatesInput | AsteroidsScalarWhereWithAggregatesInput[]
    full_name?: StringWithAggregatesFilter<"Asteroids"> | string
    a?: FloatWithAggregatesFilter<"Asteroids"> | number
    e?: FloatWithAggregatesFilter<"Asteroids"> | number
    I?: FloatWithAggregatesFilter<"Asteroids"> | number
    longNode?: FloatWithAggregatesFilter<"Asteroids"> | number
    longPeri?: FloatWithAggregatesFilter<"Asteroids"> | number
    q?: FloatWithAggregatesFilter<"Asteroids"> | number
    ad?: FloatWithAggregatesFilter<"Asteroids"> | number
    per_y?: FloatWithAggregatesFilter<"Asteroids"> | number
    data_arc?: FloatWithAggregatesFilter<"Asteroids"> | number
    condition_code?: FloatWithAggregatesFilter<"Asteroids"> | number
    n_obs_used?: FloatWithAggregatesFilter<"Asteroids"> | number
    H?: FloatWithAggregatesFilter<"Asteroids"> | number
    pha?: FloatWithAggregatesFilter<"Asteroids"> | number
  }

  export type CometsWhereInput = {
    AND?: CometsWhereInput | CometsWhereInput[]
    OR?: CometsWhereInput[]
    NOT?: CometsWhereInput | CometsWhereInput[]
    full_name?: StringFilter<"Comets"> | string
    a?: FloatFilter<"Comets"> | number
    e?: FloatFilter<"Comets"> | number
    I?: FloatFilter<"Comets"> | number
    longNode?: FloatFilter<"Comets"> | number
    longPeri?: FloatFilter<"Comets"> | number
    q?: FloatFilter<"Comets"> | number
    ad?: FloatFilter<"Comets"> | number
    per_y?: FloatFilter<"Comets"> | number
    data_arc?: FloatFilter<"Comets"> | number
    condition_code?: FloatFilter<"Comets"> | number
    n_obs_used?: FloatFilter<"Comets"> | number
    H?: FloatFilter<"Comets"> | number
    pha?: FloatFilter<"Comets"> | number
  }

  export type CometsOrderByWithRelationInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type CometsWhereUniqueInput = Prisma.AtLeast<{
    full_name?: string
    AND?: CometsWhereInput | CometsWhereInput[]
    OR?: CometsWhereInput[]
    NOT?: CometsWhereInput | CometsWhereInput[]
    a?: FloatFilter<"Comets"> | number
    e?: FloatFilter<"Comets"> | number
    I?: FloatFilter<"Comets"> | number
    longNode?: FloatFilter<"Comets"> | number
    longPeri?: FloatFilter<"Comets"> | number
    q?: FloatFilter<"Comets"> | number
    ad?: FloatFilter<"Comets"> | number
    per_y?: FloatFilter<"Comets"> | number
    data_arc?: FloatFilter<"Comets"> | number
    condition_code?: FloatFilter<"Comets"> | number
    n_obs_used?: FloatFilter<"Comets"> | number
    H?: FloatFilter<"Comets"> | number
    pha?: FloatFilter<"Comets"> | number
  }, "full_name">

  export type CometsOrderByWithAggregationInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
    _count?: CometsCountOrderByAggregateInput
    _avg?: CometsAvgOrderByAggregateInput
    _max?: CometsMaxOrderByAggregateInput
    _min?: CometsMinOrderByAggregateInput
    _sum?: CometsSumOrderByAggregateInput
  }

  export type CometsScalarWhereWithAggregatesInput = {
    AND?: CometsScalarWhereWithAggregatesInput | CometsScalarWhereWithAggregatesInput[]
    OR?: CometsScalarWhereWithAggregatesInput[]
    NOT?: CometsScalarWhereWithAggregatesInput | CometsScalarWhereWithAggregatesInput[]
    full_name?: StringWithAggregatesFilter<"Comets"> | string
    a?: FloatWithAggregatesFilter<"Comets"> | number
    e?: FloatWithAggregatesFilter<"Comets"> | number
    I?: FloatWithAggregatesFilter<"Comets"> | number
    longNode?: FloatWithAggregatesFilter<"Comets"> | number
    longPeri?: FloatWithAggregatesFilter<"Comets"> | number
    q?: FloatWithAggregatesFilter<"Comets"> | number
    ad?: FloatWithAggregatesFilter<"Comets"> | number
    per_y?: FloatWithAggregatesFilter<"Comets"> | number
    data_arc?: FloatWithAggregatesFilter<"Comets"> | number
    condition_code?: FloatWithAggregatesFilter<"Comets"> | number
    n_obs_used?: FloatWithAggregatesFilter<"Comets"> | number
    H?: FloatWithAggregatesFilter<"Comets"> | number
    pha?: FloatWithAggregatesFilter<"Comets"> | number
  }

  export type PlanetsWhereInput = {
    AND?: PlanetsWhereInput | PlanetsWhereInput[]
    OR?: PlanetsWhereInput[]
    NOT?: PlanetsWhereInput | PlanetsWhereInput[]
    full_name?: StringFilter<"Planets"> | string
    a?: FloatFilter<"Planets"> | number
    e?: FloatFilter<"Planets"> | number
    I?: FloatFilter<"Planets"> | number
    L?: FloatFilter<"Planets"> | number
    longPeri?: FloatFilter<"Planets"> | number
    longNode?: FloatFilter<"Planets"> | number
    size?: FloatFilter<"Planets"> | number
    axialTilt?: FloatFilter<"Planets"> | number
    rotPeriod?: FloatFilter<"Planets"> | number
    tex?: StringFilter<"Planets"> | string
  }

  export type PlanetsOrderByWithRelationInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    L?: SortOrder
    longPeri?: SortOrder
    longNode?: SortOrder
    size?: SortOrder
    axialTilt?: SortOrder
    rotPeriod?: SortOrder
    tex?: SortOrder
  }

  export type PlanetsWhereUniqueInput = Prisma.AtLeast<{
    full_name?: string
    AND?: PlanetsWhereInput | PlanetsWhereInput[]
    OR?: PlanetsWhereInput[]
    NOT?: PlanetsWhereInput | PlanetsWhereInput[]
    a?: FloatFilter<"Planets"> | number
    e?: FloatFilter<"Planets"> | number
    I?: FloatFilter<"Planets"> | number
    L?: FloatFilter<"Planets"> | number
    longPeri?: FloatFilter<"Planets"> | number
    longNode?: FloatFilter<"Planets"> | number
    size?: FloatFilter<"Planets"> | number
    axialTilt?: FloatFilter<"Planets"> | number
    rotPeriod?: FloatFilter<"Planets"> | number
    tex?: StringFilter<"Planets"> | string
  }, "full_name">

  export type PlanetsOrderByWithAggregationInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    L?: SortOrder
    longPeri?: SortOrder
    longNode?: SortOrder
    size?: SortOrder
    axialTilt?: SortOrder
    rotPeriod?: SortOrder
    tex?: SortOrder
    _count?: PlanetsCountOrderByAggregateInput
    _avg?: PlanetsAvgOrderByAggregateInput
    _max?: PlanetsMaxOrderByAggregateInput
    _min?: PlanetsMinOrderByAggregateInput
    _sum?: PlanetsSumOrderByAggregateInput
  }

  export type PlanetsScalarWhereWithAggregatesInput = {
    AND?: PlanetsScalarWhereWithAggregatesInput | PlanetsScalarWhereWithAggregatesInput[]
    OR?: PlanetsScalarWhereWithAggregatesInput[]
    NOT?: PlanetsScalarWhereWithAggregatesInput | PlanetsScalarWhereWithAggregatesInput[]
    full_name?: StringWithAggregatesFilter<"Planets"> | string
    a?: FloatWithAggregatesFilter<"Planets"> | number
    e?: FloatWithAggregatesFilter<"Planets"> | number
    I?: FloatWithAggregatesFilter<"Planets"> | number
    L?: FloatWithAggregatesFilter<"Planets"> | number
    longPeri?: FloatWithAggregatesFilter<"Planets"> | number
    longNode?: FloatWithAggregatesFilter<"Planets"> | number
    size?: FloatWithAggregatesFilter<"Planets"> | number
    axialTilt?: FloatWithAggregatesFilter<"Planets"> | number
    rotPeriod?: FloatWithAggregatesFilter<"Planets"> | number
    tex?: StringWithAggregatesFilter<"Planets"> | string
  }

  export type AsteroidsCreateInput = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
  }

  export type AsteroidsUncheckedCreateInput = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
  }

  export type AsteroidsUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type AsteroidsUncheckedUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type AsteroidsCreateManyInput = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
  }

  export type AsteroidsUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type AsteroidsUncheckedUpdateManyInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type CometsCreateInput = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
  }

  export type CometsUncheckedCreateInput = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
  }

  export type CometsUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type CometsUncheckedUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type CometsCreateManyInput = {
    full_name: string
    a: number
    e: number
    I: number
    longNode: number
    longPeri: number
    q: number
    ad: number
    per_y: number
    data_arc: number
    condition_code: number
    n_obs_used: number
    H: number
    pha: number
  }

  export type CometsUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type CometsUncheckedUpdateManyInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    q?: FloatFieldUpdateOperationsInput | number
    ad?: FloatFieldUpdateOperationsInput | number
    per_y?: FloatFieldUpdateOperationsInput | number
    data_arc?: FloatFieldUpdateOperationsInput | number
    condition_code?: FloatFieldUpdateOperationsInput | number
    n_obs_used?: FloatFieldUpdateOperationsInput | number
    H?: FloatFieldUpdateOperationsInput | number
    pha?: FloatFieldUpdateOperationsInput | number
  }

  export type PlanetsCreateInput = {
    full_name: string
    a: number
    e: number
    I: number
    L: number
    longPeri: number
    longNode: number
    size: number
    axialTilt: number
    rotPeriod: number
    tex: string
  }

  export type PlanetsUncheckedCreateInput = {
    full_name: string
    a: number
    e: number
    I: number
    L: number
    longPeri: number
    longNode: number
    size: number
    axialTilt: number
    rotPeriod: number
    tex: string
  }

  export type PlanetsUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    rotPeriod?: FloatFieldUpdateOperationsInput | number
    tex?: StringFieldUpdateOperationsInput | string
  }

  export type PlanetsUncheckedUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    rotPeriod?: FloatFieldUpdateOperationsInput | number
    tex?: StringFieldUpdateOperationsInput | string
  }

  export type PlanetsCreateManyInput = {
    full_name: string
    a: number
    e: number
    I: number
    L: number
    longPeri: number
    longNode: number
    size: number
    axialTilt: number
    rotPeriod: number
    tex: string
  }

  export type PlanetsUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    rotPeriod?: FloatFieldUpdateOperationsInput | number
    tex?: StringFieldUpdateOperationsInput | string
  }

  export type PlanetsUncheckedUpdateManyInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    a?: FloatFieldUpdateOperationsInput | number
    e?: FloatFieldUpdateOperationsInput | number
    I?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    longPeri?: FloatFieldUpdateOperationsInput | number
    longNode?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    rotPeriod?: FloatFieldUpdateOperationsInput | number
    tex?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AsteroidsCountOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type AsteroidsAvgOrderByAggregateInput = {
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type AsteroidsMaxOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type AsteroidsMinOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type AsteroidsSumOrderByAggregateInput = {
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CometsCountOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type CometsAvgOrderByAggregateInput = {
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type CometsMaxOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type CometsMinOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type CometsSumOrderByAggregateInput = {
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    longNode?: SortOrder
    longPeri?: SortOrder
    q?: SortOrder
    ad?: SortOrder
    per_y?: SortOrder
    data_arc?: SortOrder
    condition_code?: SortOrder
    n_obs_used?: SortOrder
    H?: SortOrder
    pha?: SortOrder
  }

  export type PlanetsCountOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    L?: SortOrder
    longPeri?: SortOrder
    longNode?: SortOrder
    size?: SortOrder
    axialTilt?: SortOrder
    rotPeriod?: SortOrder
    tex?: SortOrder
  }

  export type PlanetsAvgOrderByAggregateInput = {
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    L?: SortOrder
    longPeri?: SortOrder
    longNode?: SortOrder
    size?: SortOrder
    axialTilt?: SortOrder
    rotPeriod?: SortOrder
  }

  export type PlanetsMaxOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    L?: SortOrder
    longPeri?: SortOrder
    longNode?: SortOrder
    size?: SortOrder
    axialTilt?: SortOrder
    rotPeriod?: SortOrder
    tex?: SortOrder
  }

  export type PlanetsMinOrderByAggregateInput = {
    full_name?: SortOrder
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    L?: SortOrder
    longPeri?: SortOrder
    longNode?: SortOrder
    size?: SortOrder
    axialTilt?: SortOrder
    rotPeriod?: SortOrder
    tex?: SortOrder
  }

  export type PlanetsSumOrderByAggregateInput = {
    a?: SortOrder
    e?: SortOrder
    I?: SortOrder
    L?: SortOrder
    longPeri?: SortOrder
    longNode?: SortOrder
    size?: SortOrder
    axialTilt?: SortOrder
    rotPeriod?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AsteroidsDefaultArgs instead
     */
    export type AsteroidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsteroidsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CometsDefaultArgs instead
     */
    export type CometsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CometsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanetsDefaultArgs instead
     */
    export type PlanetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanetsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}