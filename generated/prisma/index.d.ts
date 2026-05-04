
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
 * Model pengumuman
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type pengumuman = $Result.DefaultSelection<Prisma.$pengumumanPayload>
/**
 * Model siswa
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type siswa = $Result.DefaultSelection<Prisma.$siswaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pengumumen
 * const pengumumen = await prisma.pengumuman.findMany()
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
   * // Fetch zero or more Pengumumen
   * const pengumumen = await prisma.pengumuman.findMany()
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
   * `prisma.pengumuman`: Exposes CRUD operations for the **pengumuman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengumumen
    * const pengumumen = await prisma.pengumuman.findMany()
    * ```
    */
  get pengumuman(): Prisma.pengumumanDelegate<ExtArgs>;

  /**
   * `prisma.siswa`: Exposes CRUD operations for the **siswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Siswas
    * const siswas = await prisma.siswa.findMany()
    * ```
    */
  get siswa(): Prisma.siswaDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    pengumuman: 'pengumuman',
    siswa: 'siswa'
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
      modelProps: "pengumuman" | "siswa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pengumuman: {
        payload: Prisma.$pengumumanPayload<ExtArgs>
        fields: Prisma.pengumumanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pengumumanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pengumumanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          findFirst: {
            args: Prisma.pengumumanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pengumumanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          findMany: {
            args: Prisma.pengumumanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>[]
          }
          create: {
            args: Prisma.pengumumanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          createMany: {
            args: Prisma.pengumumanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pengumumanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>[]
          }
          delete: {
            args: Prisma.pengumumanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          update: {
            args: Prisma.pengumumanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          deleteMany: {
            args: Prisma.pengumumanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pengumumanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pengumumanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          aggregate: {
            args: Prisma.PengumumanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengumuman>
          }
          groupBy: {
            args: Prisma.pengumumanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengumumanGroupByOutputType>[]
          }
          count: {
            args: Prisma.pengumumanCountArgs<ExtArgs>
            result: $Utils.Optional<PengumumanCountAggregateOutputType> | number
          }
        }
      }
      siswa: {
        payload: Prisma.$siswaPayload<ExtArgs>
        fields: Prisma.siswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.siswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.siswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          findFirst: {
            args: Prisma.siswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.siswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          findMany: {
            args: Prisma.siswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>[]
          }
          create: {
            args: Prisma.siswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          createMany: {
            args: Prisma.siswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.siswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>[]
          }
          delete: {
            args: Prisma.siswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          update: {
            args: Prisma.siswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          deleteMany: {
            args: Prisma.siswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.siswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.siswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          aggregate: {
            args: Prisma.SiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiswa>
          }
          groupBy: {
            args: Prisma.siswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.siswaCountArgs<ExtArgs>
            result: $Utils.Optional<SiswaCountAggregateOutputType> | number
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
   * Model pengumuman
   */

  export type AggregatePengumuman = {
    _count: PengumumanCountAggregateOutputType | null
    _avg: PengumumanAvgAggregateOutputType | null
    _sum: PengumumanSumAggregateOutputType | null
    _min: PengumumanMinAggregateOutputType | null
    _max: PengumumanMaxAggregateOutputType | null
  }

  export type PengumumanAvgAggregateOutputType = {
    id: number | null
  }

  export type PengumumanSumAggregateOutputType = {
    id: number | null
  }

  export type PengumumanMinAggregateOutputType = {
    nipd: string | null
    kelas: string | null
    nama: string | null
    id: number | null
  }

  export type PengumumanMaxAggregateOutputType = {
    nipd: string | null
    kelas: string | null
    nama: string | null
    id: number | null
  }

  export type PengumumanCountAggregateOutputType = {
    nipd: number
    kelas: number
    nama: number
    id: number
    _all: number
  }


  export type PengumumanAvgAggregateInputType = {
    id?: true
  }

  export type PengumumanSumAggregateInputType = {
    id?: true
  }

  export type PengumumanMinAggregateInputType = {
    nipd?: true
    kelas?: true
    nama?: true
    id?: true
  }

  export type PengumumanMaxAggregateInputType = {
    nipd?: true
    kelas?: true
    nama?: true
    id?: true
  }

  export type PengumumanCountAggregateInputType = {
    nipd?: true
    kelas?: true
    nama?: true
    id?: true
    _all?: true
  }

  export type PengumumanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengumuman to aggregate.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pengumumen
    **/
    _count?: true | PengumumanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PengumumanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PengumumanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengumumanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengumumanMaxAggregateInputType
  }

  export type GetPengumumanAggregateType<T extends PengumumanAggregateArgs> = {
        [P in keyof T & keyof AggregatePengumuman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengumuman[P]>
      : GetScalarType<T[P], AggregatePengumuman[P]>
  }




  export type pengumumanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pengumumanWhereInput
    orderBy?: pengumumanOrderByWithAggregationInput | pengumumanOrderByWithAggregationInput[]
    by: PengumumanScalarFieldEnum[] | PengumumanScalarFieldEnum
    having?: pengumumanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengumumanCountAggregateInputType | true
    _avg?: PengumumanAvgAggregateInputType
    _sum?: PengumumanSumAggregateInputType
    _min?: PengumumanMinAggregateInputType
    _max?: PengumumanMaxAggregateInputType
  }

  export type PengumumanGroupByOutputType = {
    nipd: string | null
    kelas: string | null
    nama: string | null
    id: number
    _count: PengumumanCountAggregateOutputType | null
    _avg: PengumumanAvgAggregateOutputType | null
    _sum: PengumumanSumAggregateOutputType | null
    _min: PengumumanMinAggregateOutputType | null
    _max: PengumumanMaxAggregateOutputType | null
  }

  type GetPengumumanGroupByPayload<T extends pengumumanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengumumanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengumumanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengumumanGroupByOutputType[P]>
            : GetScalarType<T[P], PengumumanGroupByOutputType[P]>
        }
      >
    >


  export type pengumumanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nipd?: boolean
    kelas?: boolean
    nama?: boolean
    id?: boolean
  }, ExtArgs["result"]["pengumuman"]>

  export type pengumumanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nipd?: boolean
    kelas?: boolean
    nama?: boolean
    id?: boolean
  }, ExtArgs["result"]["pengumuman"]>

  export type pengumumanSelectScalar = {
    nipd?: boolean
    kelas?: boolean
    nama?: boolean
    id?: boolean
  }


  export type $pengumumanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengumuman"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nipd: string | null
      kelas: string | null
      nama: string | null
      id: number
    }, ExtArgs["result"]["pengumuman"]>
    composites: {}
  }

  type pengumumanGetPayload<S extends boolean | null | undefined | pengumumanDefaultArgs> = $Result.GetResult<Prisma.$pengumumanPayload, S>

  type pengumumanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pengumumanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PengumumanCountAggregateInputType | true
    }

  export interface pengumumanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pengumuman'], meta: { name: 'pengumuman' } }
    /**
     * Find zero or one Pengumuman that matches the filter.
     * @param {pengumumanFindUniqueArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pengumumanFindUniqueArgs>(args: SelectSubset<T, pengumumanFindUniqueArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pengumuman that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pengumumanFindUniqueOrThrowArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pengumumanFindUniqueOrThrowArgs>(args: SelectSubset<T, pengumumanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pengumuman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanFindFirstArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pengumumanFindFirstArgs>(args?: SelectSubset<T, pengumumanFindFirstArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pengumuman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanFindFirstOrThrowArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pengumumanFindFirstOrThrowArgs>(args?: SelectSubset<T, pengumumanFindFirstOrThrowArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pengumumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengumumen
     * const pengumumen = await prisma.pengumuman.findMany()
     * 
     * // Get first 10 Pengumumen
     * const pengumumen = await prisma.pengumuman.findMany({ take: 10 })
     * 
     * // Only select the `nipd`
     * const pengumumanWithNipdOnly = await prisma.pengumuman.findMany({ select: { nipd: true } })
     * 
     */
    findMany<T extends pengumumanFindManyArgs>(args?: SelectSubset<T, pengumumanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pengumuman.
     * @param {pengumumanCreateArgs} args - Arguments to create a Pengumuman.
     * @example
     * // Create one Pengumuman
     * const Pengumuman = await prisma.pengumuman.create({
     *   data: {
     *     // ... data to create a Pengumuman
     *   }
     * })
     * 
     */
    create<T extends pengumumanCreateArgs>(args: SelectSubset<T, pengumumanCreateArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pengumumen.
     * @param {pengumumanCreateManyArgs} args - Arguments to create many Pengumumen.
     * @example
     * // Create many Pengumumen
     * const pengumuman = await prisma.pengumuman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pengumumanCreateManyArgs>(args?: SelectSubset<T, pengumumanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pengumumen and returns the data saved in the database.
     * @param {pengumumanCreateManyAndReturnArgs} args - Arguments to create many Pengumumen.
     * @example
     * // Create many Pengumumen
     * const pengumuman = await prisma.pengumuman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pengumumen and only return the `nipd`
     * const pengumumanWithNipdOnly = await prisma.pengumuman.createManyAndReturn({ 
     *   select: { nipd: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pengumumanCreateManyAndReturnArgs>(args?: SelectSubset<T, pengumumanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pengumuman.
     * @param {pengumumanDeleteArgs} args - Arguments to delete one Pengumuman.
     * @example
     * // Delete one Pengumuman
     * const Pengumuman = await prisma.pengumuman.delete({
     *   where: {
     *     // ... filter to delete one Pengumuman
     *   }
     * })
     * 
     */
    delete<T extends pengumumanDeleteArgs>(args: SelectSubset<T, pengumumanDeleteArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pengumuman.
     * @param {pengumumanUpdateArgs} args - Arguments to update one Pengumuman.
     * @example
     * // Update one Pengumuman
     * const pengumuman = await prisma.pengumuman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pengumumanUpdateArgs>(args: SelectSubset<T, pengumumanUpdateArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pengumumen.
     * @param {pengumumanDeleteManyArgs} args - Arguments to filter Pengumumen to delete.
     * @example
     * // Delete a few Pengumumen
     * const { count } = await prisma.pengumuman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pengumumanDeleteManyArgs>(args?: SelectSubset<T, pengumumanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengumumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengumumen
     * const pengumuman = await prisma.pengumuman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pengumumanUpdateManyArgs>(args: SelectSubset<T, pengumumanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengumuman.
     * @param {pengumumanUpsertArgs} args - Arguments to update or create a Pengumuman.
     * @example
     * // Update or create a Pengumuman
     * const pengumuman = await prisma.pengumuman.upsert({
     *   create: {
     *     // ... data to create a Pengumuman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengumuman we want to update
     *   }
     * })
     */
    upsert<T extends pengumumanUpsertArgs>(args: SelectSubset<T, pengumumanUpsertArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pengumumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanCountArgs} args - Arguments to filter Pengumumen to count.
     * @example
     * // Count the number of Pengumumen
     * const count = await prisma.pengumuman.count({
     *   where: {
     *     // ... the filter for the Pengumumen we want to count
     *   }
     * })
    **/
    count<T extends pengumumanCountArgs>(
      args?: Subset<T, pengumumanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengumumanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengumuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PengumumanAggregateArgs>(args: Subset<T, PengumumanAggregateArgs>): Prisma.PrismaPromise<GetPengumumanAggregateType<T>>

    /**
     * Group by Pengumuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanGroupByArgs} args - Group by arguments.
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
      T extends pengumumanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pengumumanGroupByArgs['orderBy'] }
        : { orderBy?: pengumumanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pengumumanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengumumanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pengumuman model
   */
  readonly fields: pengumumanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pengumuman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pengumumanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the pengumuman model
   */ 
  interface pengumumanFieldRefs {
    readonly nipd: FieldRef<"pengumuman", 'String'>
    readonly kelas: FieldRef<"pengumuman", 'String'>
    readonly nama: FieldRef<"pengumuman", 'String'>
    readonly id: FieldRef<"pengumuman", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pengumuman findUnique
   */
  export type pengumumanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman findUniqueOrThrow
   */
  export type pengumumanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman findFirst
   */
  export type pengumumanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pengumumen.
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pengumumen.
     */
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * pengumuman findFirstOrThrow
   */
  export type pengumumanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pengumumen.
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pengumumen.
     */
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * pengumuman findMany
   */
  export type pengumumanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Filter, which pengumumen to fetch.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pengumumen.
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * pengumuman create
   */
  export type pengumumanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * The data needed to create a pengumuman.
     */
    data?: XOR<pengumumanCreateInput, pengumumanUncheckedCreateInput>
  }

  /**
   * pengumuman createMany
   */
  export type pengumumanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pengumumen.
     */
    data: pengumumanCreateManyInput | pengumumanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengumuman createManyAndReturn
   */
  export type pengumumanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pengumumen.
     */
    data: pengumumanCreateManyInput | pengumumanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengumuman update
   */
  export type pengumumanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * The data needed to update a pengumuman.
     */
    data: XOR<pengumumanUpdateInput, pengumumanUncheckedUpdateInput>
    /**
     * Choose, which pengumuman to update.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman updateMany
   */
  export type pengumumanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pengumumen.
     */
    data: XOR<pengumumanUpdateManyMutationInput, pengumumanUncheckedUpdateManyInput>
    /**
     * Filter which pengumumen to update
     */
    where?: pengumumanWhereInput
  }

  /**
   * pengumuman upsert
   */
  export type pengumumanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * The filter to search for the pengumuman to update in case it exists.
     */
    where: pengumumanWhereUniqueInput
    /**
     * In case the pengumuman found by the `where` argument doesn't exist, create a new pengumuman with this data.
     */
    create: XOR<pengumumanCreateInput, pengumumanUncheckedCreateInput>
    /**
     * In case the pengumuman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pengumumanUpdateInput, pengumumanUncheckedUpdateInput>
  }

  /**
   * pengumuman delete
   */
  export type pengumumanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Filter which pengumuman to delete.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman deleteMany
   */
  export type pengumumanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengumumen to delete
     */
    where?: pengumumanWhereInput
  }

  /**
   * pengumuman without action
   */
  export type pengumumanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
  }


  /**
   * Model siswa
   */

  export type AggregateSiswa = {
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  export type SiswaAvgAggregateOutputType = {
    id: number | null
  }

  export type SiswaSumAggregateOutputType = {
    id: number | null
  }

  export type SiswaMinAggregateOutputType = {
    nama: string | null
    nisn: string | null
    kelas: string | null
    id: number | null
  }

  export type SiswaMaxAggregateOutputType = {
    nama: string | null
    nisn: string | null
    kelas: string | null
    id: number | null
  }

  export type SiswaCountAggregateOutputType = {
    nama: number
    nisn: number
    kelas: number
    id: number
    _all: number
  }


  export type SiswaAvgAggregateInputType = {
    id?: true
  }

  export type SiswaSumAggregateInputType = {
    id?: true
  }

  export type SiswaMinAggregateInputType = {
    nama?: true
    nisn?: true
    kelas?: true
    id?: true
  }

  export type SiswaMaxAggregateInputType = {
    nama?: true
    nisn?: true
    kelas?: true
    id?: true
  }

  export type SiswaCountAggregateInputType = {
    nama?: true
    nisn?: true
    kelas?: true
    id?: true
    _all?: true
  }

  export type SiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which siswa to aggregate.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned siswas
    **/
    _count?: true | SiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiswaMaxAggregateInputType
  }

  export type GetSiswaAggregateType<T extends SiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateSiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiswa[P]>
      : GetScalarType<T[P], AggregateSiswa[P]>
  }




  export type siswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: siswaWhereInput
    orderBy?: siswaOrderByWithAggregationInput | siswaOrderByWithAggregationInput[]
    by: SiswaScalarFieldEnum[] | SiswaScalarFieldEnum
    having?: siswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiswaCountAggregateInputType | true
    _avg?: SiswaAvgAggregateInputType
    _sum?: SiswaSumAggregateInputType
    _min?: SiswaMinAggregateInputType
    _max?: SiswaMaxAggregateInputType
  }

  export type SiswaGroupByOutputType = {
    nama: string | null
    nisn: string | null
    kelas: string | null
    id: number
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  type GetSiswaGroupByPayload<T extends siswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiswaGroupByOutputType[P]>
            : GetScalarType<T[P], SiswaGroupByOutputType[P]>
        }
      >
    >


  export type siswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
    nisn?: boolean
    kelas?: boolean
    id?: boolean
  }, ExtArgs["result"]["siswa"]>

  export type siswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
    nisn?: boolean
    kelas?: boolean
    id?: boolean
  }, ExtArgs["result"]["siswa"]>

  export type siswaSelectScalar = {
    nama?: boolean
    nisn?: boolean
    kelas?: boolean
    id?: boolean
  }


  export type $siswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "siswa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nama: string | null
      nisn: string | null
      kelas: string | null
      id: number
    }, ExtArgs["result"]["siswa"]>
    composites: {}
  }

  type siswaGetPayload<S extends boolean | null | undefined | siswaDefaultArgs> = $Result.GetResult<Prisma.$siswaPayload, S>

  type siswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<siswaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiswaCountAggregateInputType | true
    }

  export interface siswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['siswa'], meta: { name: 'siswa' } }
    /**
     * Find zero or one Siswa that matches the filter.
     * @param {siswaFindUniqueArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends siswaFindUniqueArgs>(args: SelectSubset<T, siswaFindUniqueArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Siswa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {siswaFindUniqueOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends siswaFindUniqueOrThrowArgs>(args: SelectSubset<T, siswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Siswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaFindFirstArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends siswaFindFirstArgs>(args?: SelectSubset<T, siswaFindFirstArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Siswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaFindFirstOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends siswaFindFirstOrThrowArgs>(args?: SelectSubset<T, siswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Siswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Siswas
     * const siswas = await prisma.siswa.findMany()
     * 
     * // Get first 10 Siswas
     * const siswas = await prisma.siswa.findMany({ take: 10 })
     * 
     * // Only select the `nama`
     * const siswaWithNamaOnly = await prisma.siswa.findMany({ select: { nama: true } })
     * 
     */
    findMany<T extends siswaFindManyArgs>(args?: SelectSubset<T, siswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Siswa.
     * @param {siswaCreateArgs} args - Arguments to create a Siswa.
     * @example
     * // Create one Siswa
     * const Siswa = await prisma.siswa.create({
     *   data: {
     *     // ... data to create a Siswa
     *   }
     * })
     * 
     */
    create<T extends siswaCreateArgs>(args: SelectSubset<T, siswaCreateArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Siswas.
     * @param {siswaCreateManyArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends siswaCreateManyArgs>(args?: SelectSubset<T, siswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Siswas and returns the data saved in the database.
     * @param {siswaCreateManyAndReturnArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Siswas and only return the `nama`
     * const siswaWithNamaOnly = await prisma.siswa.createManyAndReturn({ 
     *   select: { nama: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends siswaCreateManyAndReturnArgs>(args?: SelectSubset<T, siswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Siswa.
     * @param {siswaDeleteArgs} args - Arguments to delete one Siswa.
     * @example
     * // Delete one Siswa
     * const Siswa = await prisma.siswa.delete({
     *   where: {
     *     // ... filter to delete one Siswa
     *   }
     * })
     * 
     */
    delete<T extends siswaDeleteArgs>(args: SelectSubset<T, siswaDeleteArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Siswa.
     * @param {siswaUpdateArgs} args - Arguments to update one Siswa.
     * @example
     * // Update one Siswa
     * const siswa = await prisma.siswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends siswaUpdateArgs>(args: SelectSubset<T, siswaUpdateArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Siswas.
     * @param {siswaDeleteManyArgs} args - Arguments to filter Siswas to delete.
     * @example
     * // Delete a few Siswas
     * const { count } = await prisma.siswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends siswaDeleteManyArgs>(args?: SelectSubset<T, siswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Siswas
     * const siswa = await prisma.siswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends siswaUpdateManyArgs>(args: SelectSubset<T, siswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Siswa.
     * @param {siswaUpsertArgs} args - Arguments to update or create a Siswa.
     * @example
     * // Update or create a Siswa
     * const siswa = await prisma.siswa.upsert({
     *   create: {
     *     // ... data to create a Siswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Siswa we want to update
     *   }
     * })
     */
    upsert<T extends siswaUpsertArgs>(args: SelectSubset<T, siswaUpsertArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaCountArgs} args - Arguments to filter Siswas to count.
     * @example
     * // Count the number of Siswas
     * const count = await prisma.siswa.count({
     *   where: {
     *     // ... the filter for the Siswas we want to count
     *   }
     * })
    **/
    count<T extends siswaCountArgs>(
      args?: Subset<T, siswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiswaAggregateArgs>(args: Subset<T, SiswaAggregateArgs>): Prisma.PrismaPromise<GetSiswaAggregateType<T>>

    /**
     * Group by Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaGroupByArgs} args - Group by arguments.
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
      T extends siswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: siswaGroupByArgs['orderBy'] }
        : { orderBy?: siswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, siswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the siswa model
   */
  readonly fields: siswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for siswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__siswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the siswa model
   */ 
  interface siswaFieldRefs {
    readonly nama: FieldRef<"siswa", 'String'>
    readonly nisn: FieldRef<"siswa", 'String'>
    readonly kelas: FieldRef<"siswa", 'String'>
    readonly id: FieldRef<"siswa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * siswa findUnique
   */
  export type siswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa findUniqueOrThrow
   */
  export type siswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa findFirst
   */
  export type siswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for siswas.
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * siswa findFirstOrThrow
   */
  export type siswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for siswas.
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * siswa findMany
   */
  export type siswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Filter, which siswas to fetch.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing siswas.
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * siswa create
   */
  export type siswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * The data needed to create a siswa.
     */
    data?: XOR<siswaCreateInput, siswaUncheckedCreateInput>
  }

  /**
   * siswa createMany
   */
  export type siswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many siswas.
     */
    data: siswaCreateManyInput | siswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * siswa createManyAndReturn
   */
  export type siswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many siswas.
     */
    data: siswaCreateManyInput | siswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * siswa update
   */
  export type siswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * The data needed to update a siswa.
     */
    data: XOR<siswaUpdateInput, siswaUncheckedUpdateInput>
    /**
     * Choose, which siswa to update.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa updateMany
   */
  export type siswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update siswas.
     */
    data: XOR<siswaUpdateManyMutationInput, siswaUncheckedUpdateManyInput>
    /**
     * Filter which siswas to update
     */
    where?: siswaWhereInput
  }

  /**
   * siswa upsert
   */
  export type siswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * The filter to search for the siswa to update in case it exists.
     */
    where: siswaWhereUniqueInput
    /**
     * In case the siswa found by the `where` argument doesn't exist, create a new siswa with this data.
     */
    create: XOR<siswaCreateInput, siswaUncheckedCreateInput>
    /**
     * In case the siswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<siswaUpdateInput, siswaUncheckedUpdateInput>
  }

  /**
   * siswa delete
   */
  export type siswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Filter which siswa to delete.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa deleteMany
   */
  export type siswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which siswas to delete
     */
    where?: siswaWhereInput
  }

  /**
   * siswa without action
   */
  export type siswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PengumumanScalarFieldEnum: {
    nipd: 'nipd',
    kelas: 'kelas',
    nama: 'nama',
    id: 'id'
  };

  export type PengumumanScalarFieldEnum = (typeof PengumumanScalarFieldEnum)[keyof typeof PengumumanScalarFieldEnum]


  export const SiswaScalarFieldEnum: {
    nama: 'nama',
    nisn: 'nisn',
    kelas: 'kelas',
    id: 'id'
  };

  export type SiswaScalarFieldEnum = (typeof SiswaScalarFieldEnum)[keyof typeof SiswaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type pengumumanWhereInput = {
    AND?: pengumumanWhereInput | pengumumanWhereInput[]
    OR?: pengumumanWhereInput[]
    NOT?: pengumumanWhereInput | pengumumanWhereInput[]
    nipd?: StringNullableFilter<"pengumuman"> | string | null
    kelas?: StringNullableFilter<"pengumuman"> | string | null
    nama?: StringNullableFilter<"pengumuman"> | string | null
    id?: IntFilter<"pengumuman"> | number
  }

  export type pengumumanOrderByWithRelationInput = {
    nipd?: SortOrderInput | SortOrder
    kelas?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type pengumumanWhereUniqueInput = Prisma.AtLeast<{
    nipd?: string
    id?: number
    AND?: pengumumanWhereInput | pengumumanWhereInput[]
    OR?: pengumumanWhereInput[]
    NOT?: pengumumanWhereInput | pengumumanWhereInput[]
    kelas?: StringNullableFilter<"pengumuman"> | string | null
    nama?: StringNullableFilter<"pengumuman"> | string | null
  }, "id" | "nipd">

  export type pengumumanOrderByWithAggregationInput = {
    nipd?: SortOrderInput | SortOrder
    kelas?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: pengumumanCountOrderByAggregateInput
    _avg?: pengumumanAvgOrderByAggregateInput
    _max?: pengumumanMaxOrderByAggregateInput
    _min?: pengumumanMinOrderByAggregateInput
    _sum?: pengumumanSumOrderByAggregateInput
  }

  export type pengumumanScalarWhereWithAggregatesInput = {
    AND?: pengumumanScalarWhereWithAggregatesInput | pengumumanScalarWhereWithAggregatesInput[]
    OR?: pengumumanScalarWhereWithAggregatesInput[]
    NOT?: pengumumanScalarWhereWithAggregatesInput | pengumumanScalarWhereWithAggregatesInput[]
    nipd?: StringNullableWithAggregatesFilter<"pengumuman"> | string | null
    kelas?: StringNullableWithAggregatesFilter<"pengumuman"> | string | null
    nama?: StringNullableWithAggregatesFilter<"pengumuman"> | string | null
    id?: IntWithAggregatesFilter<"pengumuman"> | number
  }

  export type siswaWhereInput = {
    AND?: siswaWhereInput | siswaWhereInput[]
    OR?: siswaWhereInput[]
    NOT?: siswaWhereInput | siswaWhereInput[]
    nama?: StringNullableFilter<"siswa"> | string | null
    nisn?: StringNullableFilter<"siswa"> | string | null
    kelas?: StringNullableFilter<"siswa"> | string | null
    id?: IntFilter<"siswa"> | number
  }

  export type siswaOrderByWithRelationInput = {
    nama?: SortOrderInput | SortOrder
    nisn?: SortOrderInput | SortOrder
    kelas?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type siswaWhereUniqueInput = Prisma.AtLeast<{
    nisn?: string
    id?: number
    AND?: siswaWhereInput | siswaWhereInput[]
    OR?: siswaWhereInput[]
    NOT?: siswaWhereInput | siswaWhereInput[]
    nama?: StringNullableFilter<"siswa"> | string | null
    kelas?: StringNullableFilter<"siswa"> | string | null
  }, "id" | "nisn">

  export type siswaOrderByWithAggregationInput = {
    nama?: SortOrderInput | SortOrder
    nisn?: SortOrderInput | SortOrder
    kelas?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: siswaCountOrderByAggregateInput
    _avg?: siswaAvgOrderByAggregateInput
    _max?: siswaMaxOrderByAggregateInput
    _min?: siswaMinOrderByAggregateInput
    _sum?: siswaSumOrderByAggregateInput
  }

  export type siswaScalarWhereWithAggregatesInput = {
    AND?: siswaScalarWhereWithAggregatesInput | siswaScalarWhereWithAggregatesInput[]
    OR?: siswaScalarWhereWithAggregatesInput[]
    NOT?: siswaScalarWhereWithAggregatesInput | siswaScalarWhereWithAggregatesInput[]
    nama?: StringNullableWithAggregatesFilter<"siswa"> | string | null
    nisn?: StringNullableWithAggregatesFilter<"siswa"> | string | null
    kelas?: StringNullableWithAggregatesFilter<"siswa"> | string | null
    id?: IntWithAggregatesFilter<"siswa"> | number
  }

  export type pengumumanCreateInput = {
    nipd?: string | null
    kelas?: string | null
    nama?: string | null
  }

  export type pengumumanUncheckedCreateInput = {
    nipd?: string | null
    kelas?: string | null
    nama?: string | null
    id?: number
  }

  export type pengumumanUpdateInput = {
    nipd?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pengumumanUncheckedUpdateInput = {
    nipd?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type pengumumanCreateManyInput = {
    nipd?: string | null
    kelas?: string | null
    nama?: string | null
    id?: number
  }

  export type pengumumanUpdateManyMutationInput = {
    nipd?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pengumumanUncheckedUpdateManyInput = {
    nipd?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type siswaCreateInput = {
    nama?: string | null
    nisn?: string | null
    kelas?: string | null
  }

  export type siswaUncheckedCreateInput = {
    nama?: string | null
    nisn?: string | null
    kelas?: string | null
    id?: number
  }

  export type siswaUpdateInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type siswaUncheckedUpdateInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type siswaCreateManyInput = {
    nama?: string | null
    nisn?: string | null
    kelas?: string | null
    id?: number
  }

  export type siswaUpdateManyMutationInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type siswaUncheckedUpdateManyInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    kelas?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pengumumanCountOrderByAggregateInput = {
    nipd?: SortOrder
    kelas?: SortOrder
    nama?: SortOrder
    id?: SortOrder
  }

  export type pengumumanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pengumumanMaxOrderByAggregateInput = {
    nipd?: SortOrder
    kelas?: SortOrder
    nama?: SortOrder
    id?: SortOrder
  }

  export type pengumumanMinOrderByAggregateInput = {
    nipd?: SortOrder
    kelas?: SortOrder
    nama?: SortOrder
    id?: SortOrder
  }

  export type pengumumanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type siswaCountOrderByAggregateInput = {
    nama?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    id?: SortOrder
  }

  export type siswaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type siswaMaxOrderByAggregateInput = {
    nama?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    id?: SortOrder
  }

  export type siswaMinOrderByAggregateInput = {
    nama?: SortOrder
    nisn?: SortOrder
    kelas?: SortOrder
    id?: SortOrder
  }

  export type siswaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use pengumumanDefaultArgs instead
     */
    export type pengumumanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pengumumanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use siswaDefaultArgs instead
     */
    export type siswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = siswaDefaultArgs<ExtArgs>

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